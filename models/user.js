'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username:{ DataTypes.STRING,
    primaryKey:true },

    password: DataTypes.STRING,
    type: DataTypes.NUMBER,
    profile_pic_url: DataTypes.STRING,
    stance: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    db.user.hasMany(db.pas)
db.pas.belongsTo(db.user)

db.user.hasMany(db.vote)
db.vote.belongsTo(db.user)


db.pas.hasMany(db.vote)
db.vote.belongsTo(db.pas)

db.user.create({

  username:'abcd',
  password:'1234', 
  type: '2',
  profile_pic_url:'xyz.png' ,
  stance: 'xy'
  

})


db.user.findAll({

  username:'abcd'
  
     

})

db.user.findAll({

  password:'1234'
   
})


db.user.findAll({

  
  type: '2'
        

})

db.user.findAll({

  
  profile_pic_url:'xyz.png' 
})

db.user.findAll({

  
  stance: 'xy'

})



  db.user.findAll({


   

    username:'abcd',
    password:'1234', 
    type: '2',
    profile_pic_url:'xyz.png' ,
    stance: 'xy' 
    
          
    
    })
    .then(name =>{

    name.updateAttributes({



      username:'abcde',
      password:'1234e', 
      type: '2e',
      profile_pic_url:'xyz.pnge' ,
      stance: 'xye'    
      
      })



      

    db.user.destroy({

      where: { 
       
    
        username:'abcd',
        password:'1234', 
        type: '2',
        profile_pic_url:'xyz.png' ,
        stance: 'xy'   
        
        }
    })








  };
  return User;
};