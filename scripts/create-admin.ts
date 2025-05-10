import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Configuración del administrador a crear
const adminData = {
  nombre: 'Max Ttito',
  correo: 'admin2@ejemplo.com',
  contrasena: '123456789',
  permisos: [
    'manage_tenants',
    'view_tenants',
    'manage_subscriptions',
    'view_api_usage',
    'view_global_reports'
  ]
};

// Crear una instancia de PrismaClient utilizando la importación del módulo db.service
import prisma from '../src/shared/services/db.service';

async function createAdmin() {
  try {
    console.log('Verificando si ya existe un administrador con ese correo...');
    
    // Verificar si ya existe un admin con ese correo
    const existingAdmin = await prisma.administradores_plataforma.findUnique({
      where: { correo: adminData.correo }
    });
    
    if (existingAdmin) {
      console.log(`Ya existe un administrador con el correo ${adminData.correo}`);
      return;
    }
    
    console.log('Creando nuevo administrador de plataforma...');
    
    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(adminData.contrasena, saltRounds);
    
    // Crear el nuevo administrador
    const newAdmin = await prisma.administradores_plataforma.create({
      data: {
        id: uuidv4(),
        nombre: adminData.nombre,
        correo: adminData.correo,
        hash_contrasena: hashedPassword,
        permisos: adminData.permisos
      }
    });
    
    console.log('Administrador creado exitosamente:');
    console.log(`ID: ${newAdmin.id}`);
    console.log(`Nombre: ${newAdmin.nombre}`);
    console.log(`Correo: ${newAdmin.correo}`);
    console.log(`Para autenticarte, usa:`);
    console.log(JSON.stringify({
      correo: adminData.correo,
      contrasena: adminData.contrasena
    }, null, 2));
  } catch (error) {
    console.error('Error al crear administrador:', error);
  } finally {
    // No necesitamos desconectar explícitamente ya que estamos usando la instancia de prisma del servicio
  }
}

// Ejecutar la función
createAdmin()
  .catch(e => {
    console.error('Error en la ejecución del script:', e);
    process.exit(1);
  });