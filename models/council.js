'use strict';
module.exports = (sequelize, DataTypes) => {
  const Council = sequelize.define('Council', {
    council_name: {DataTypes.STRING,
      primaryKey:true},

    council_banner: DataTypes.STRING
  }, {});
  Council.associate = function(models) {
    // associations can be defined here

    db.user.hasMany(db.pas)
    db.pas.belongsTo(db.user)
    
    db.user.hasMany(db.vote)
    db.vote.belongsTo(db.user)
    
    
    db.pas.hasMany(db.vote)
    db.vote.belongsTo(db.pas)




 

    db.council.create({

      council_name: 'Jayit',
      council_banner: 'admin'

    })


    db.council.findAll({

    council_name:'xyzw'
    
    
    })
    .then(name =>{

      console.log('Found Name:${name}' );
    });

    db.council.findAll({

      council_banner:'xyzw'
      
      
      })
      .then(name =>{
  
        console.log('Found Banner:${name}' );
      });

      db.council.findAll({

        council_name:'xyzw'
        
        
        })
        .then(name =>{
    
        name.updateAttributes({

        council_name:'Jayit Saha'

          })



          db.council.findAll({

          council_banner:'xyzw'
            
            
          })
          .then(name =>{
        
          name.updateAttributes({
    
          council_banner:'Jayit Saha'
    
              })
        });

        db.council.destroy({

          where: { name : 'Jayit'}
        })
    




    })





  };
  return Council;
};