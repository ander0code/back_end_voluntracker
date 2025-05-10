import { Router } from 'express';

const router = Router();

// Rutas básicas para inscripciones
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Lista de inscripciones - Implementación pendiente' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Detalles de la inscripción ${req.params.id} - Implementación pendiente` });
});

export default router;