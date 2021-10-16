const router = require("express").Router();
const Letter = require('../model/Letter');

router.post('/createLetter', async (req,res) => {
    console.log(req.body)

    
    const letter = new Letter({
        from: req.body.from,
        to: req.body.to,
        content: req.body.content,
        open: req.body.open,
    });

    try {
        const createLetter = await letter.save();
        res.send({id: createLetter._id.valueOf(), from: req.body.from, to: req.body.to, content: req.body.content})
    } catch(err) {
        res.status(400).send(err);
    }
})

router.post('/getLetter', async (req,res) => {
    console.log(req.body.id)
    const letter = await Letter.findOne({_id: req.body.id});
    if (!letter) return res.status(400).send("Letter doesn't exist")
    res.send({from: letter.from, to: letter.to, content: letter.content})
})

module.exports = router;