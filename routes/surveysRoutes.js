const requireLogin=require('../middleware/requireLogin');
const requireCredits=require('../middleware/requireCredits');

module.exports = (app) => {
    app.post('/api/surevys',requireLogin,requireCredits,(req,res)=>{

    });
};
