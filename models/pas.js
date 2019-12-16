'use strict';
module.exports = (sequelize, DataTypes) => {
  const pas = sequelize.define('pas', {
    type: DataTypes.STRING,
    id:{ DataTypes.STRING,primaryKey:true},

    time_to_talk: DataTypes.NUMBER,
    title: DataTypes.STRING,
    proposed_by: DataTypes.STRING
  }, {});
  pas.associate = function(models) {
    // associations can be defined here
    db.user.hasMany(db.pas)
    db.pas.belongsTo(db.user)
    
    db.user.hasMany(db.vote)
    db.vote.belongsTo(db.user)
    
    
    db.pas.hasMany(db.vote)
    db.vote.belongsTo(db.pas)


    db.pas.create({

      type:'1234',
      id:'12',
      time_to_talk:20,
      title:'1234',
      proposed_by:'Jayit'

    })


    db.pas.findAll({

      type:'1234',
         
    
    })
    
    db.pas.findAll({

      id:'12'
      
    })

    
    db.pas.findAll({

      
      time_to_talk:20
         
    
    })
    
    db.pas.findAll({

      
      title:'1234',
    
    })
    
    db.pas.findAll({

      
      proposed_by:'Jayit'    
    
    })

    

      db.pas.findAll({


       

          type:'1234',
          id:'12',
          time_to_talk:20,
          title:'1234',
          proposed_by:'Jayit'    
        
              
        
        })
        .then(name =>{
    
        name.updateAttributes({



            type:'12345',
            id:'125',
            time_to_talk:205,
            title:'12345',
            proposed_by:'Jayi5t'    
          
          })



          

        db.pas.destroy({

          where: { 
           
        
              type:'1234',
              id:'12',
              time_to_talk:20,
              title:'1234',
              proposed_by:'Jayit'    
            
            }
        })




  };
  return pas;
};