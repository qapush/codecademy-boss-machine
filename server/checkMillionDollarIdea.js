const checkMillionDollarIdea = (req, res, next) => {
  if(req.type !== 'ideas'){
    next();
  } else {
    const { numWeeks, weeklyRevenue } = req.body;
    const totalMoney = Number(numWeeks) * Number(weeklyRevenue);
    if (!numWeeks || !weeklyRevenue || isNaN(totalMoney) || totalMoney < 1000000) {
      res.status(400).send('Not a million dollar idea');
    } else {
      next();
    }
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
