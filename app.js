const express = require('express');
const app = express();

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Server running on port 3000'));
}
