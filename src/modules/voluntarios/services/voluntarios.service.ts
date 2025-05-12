import prisma from '../../../shared/services/db.service';
import { CrearVoluntarioDTO } from '../DTOs/crearVoluntario.dto';
import { ActualizarVoluntarioDTO } from '../DTOs/actualizarVoluntario.dto';
import { logger } from '../../../shared/services/logger';
//import ExcelJS from 'exceljs';

export const setSearchPath = async (schema: string) => {
  logger.debug(`Configurando search_path a: ${schema}`);
  await prisma.$executeRawUnsafe(`SET search_path TO ${schema}`);
};

export const obtenerTodos = async (schema: string) => {
  await setSearchPath(schema);
  return prisma.$queryRawUnsafe(`SELECT * FROM "${schema}".voluntarios`);
};

export const crearVoluntario = async (schema: string, data: CrearVoluntarioDTO) => {
  await setSearchPath(schema);

  // Usamos plantillas de texto para insertar los valores directamente
  return prisma.$queryRawUnsafe(`
    INSERT INTO "${schema}".voluntarios (nombre_completo, dni, correo, telefono, coordinador_id, area, estado)
    VALUES ('${data.nombre_completo}', '${data.dni}', '${data.correo}', '${data.telefono}', '${data.coordinador_id}', '${data.area}', '${data.estado}')
    RETURNING *;
  `);
};

export const actualizarVoluntario = async (schema: string, id: string, data: ActualizarVoluntarioDTO) => {
  await setSearchPath(schema);
  return prisma.voluntarios.update({ where: { id }, data });
};

export const eliminarVoluntario = async (schema: string, id: string) => {
  await setSearchPath(schema);
  return prisma.voluntarios.delete({ where: { id } });
};

export const obtenerHistorial = async (schema: string, id: string) => {
  await setSearchPath(schema);
  return prisma.inscripciones.findMany({
    where: { voluntario_id: id },
    include: {
      eventos: true,
      asistencia: true
    }
  });
};

export const obtenerCertificados = async (schema: string, id: string) => {
  await setSearchPath(schema);
  return prisma.certificados.findMany({ where: { voluntario_id: id } });
};

/*export const exportarVoluntarios = async (schema: string) => {
  await setSearchPath(schema);
  const voluntarios = await prisma.voluntarios.findMany();
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Voluntarios');

  sheet.columns = [
    { header: 'ID', key: 'id', width: 36 },
    { header: 'Nombre completo', key: 'nombre_completo', width: 30 },
    { header: 'DNI', key: 'dni', width: 15 },
    { header: 'Correo', key: 'correo', width: 25 },
    { header: 'Teléfono', key: 'telefono', width: 20 },
    { header: 'Área', key: 'area', width: 20 },
    { header: 'Estado', key: 'estado', width: 15 }
  ];

  voluntarios.forEach(v => sheet.addRow(v));
  const buffer = await workbook.xlsx.writeBuffer();
  return buffer;
};*/
