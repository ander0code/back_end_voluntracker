import { Router } from 'express';

const router = Router();

// Rutas básicas para certificados
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Lista de certificados - Implementación pendiente' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Detalles del certificado ${req.params.id} - Implementación pendiente` });
});

router.post('/generate/:voluntarioId', (req, res) => {
  res.status(200).json({ message: `Certificado generado para voluntario ${req.params.voluntarioId} - Implementación pendiente` });
});

export default router;