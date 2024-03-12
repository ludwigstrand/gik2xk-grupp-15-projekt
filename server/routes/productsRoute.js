const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Products route');
    }
);

router.get('/:id', (req, res) => {
    res.send('Product route');
    }
);

router.post('/:id/addRating', (req, res) => {
    res.send('Add rating route');
    }
);

router.post('/', (req, res) => {
    res.send('Add product route');
    }
);

router.put('/', (req, res) => {
    res.send('Update product route');
    }
);

router.delete('/', (req, res) => {
    res.send('Delete product route');
    }
);

module.exports = router;