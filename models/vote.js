'use strict';
module.exports = (sequelize, DataTypes) => {
  const vote = sequelize.define('vote', {
    username: DataTypes.STRING,
    vote_type_id: DataTypes.STRING,
    vote_val: DataTypes.STRING,
    timestamp: DataTypes.TIME
  }, {});
  vote.associate = function(models) {
    // associations can be defined here
db.user.hasMany(db.pas)
db.pas.belongsTo(db.user)

db.user.hasMany(db.vote)
db.vote.belongsTo(db.user)


db.pas.hasMany(db.vote)
db.vote.belongsTo(db.pas)

db.vote.create({

  username:'jayit' ,
  vote_type_id: '2',
  vote_val: '2',
  timestamp:22:00 
  

})


db.vote.findAll({

  username:'jayit' ,
    
     

})

db.pas.findAll({

  vote_type_id: '2',
      
})


db.pas.findAll({

  
  vote_val: '2',
     

})

db.pas.findAll({

  
  timestamp:22:00    

})


  db.pas.findAll({


   

    username:'jayit' ,
    vote_type_id: '2',
    vote_val: '2',
    timestamp:22:00
    
          
    
    })
    .then(name =>{

    name.updateAttributes({



      username:'jayit5' ,
      vote_type_id: '3',
      vote_val: '3',
      timestamp:23:00
      })



      

    db.pas.destroy({

      where: { 
       
    
        username:'jayit' ,
        vote_type_id: '2',
        vote_val: '2',
        timestamp:22:00  
        
        }
    })





  };
  return vote;
};