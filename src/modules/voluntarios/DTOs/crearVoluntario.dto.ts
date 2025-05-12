export interface CrearVoluntarioDTO {
  nombre_completo: string;
  dni?: string;
  correo?: string;
  telefono?: string;
  area?: string;
  estado?: string;
  coordinador_id: string;
}