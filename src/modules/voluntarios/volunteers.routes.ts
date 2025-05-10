import { Router } from 'express';

const router = Router();

// Rutas básicas para voluntarios
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Lista de voluntarios - Implementación pendiente' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Detalles del voluntario ${req.params.id} - Implementación pendiente` });
});

export default router;