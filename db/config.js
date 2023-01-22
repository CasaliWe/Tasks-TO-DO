const {Sequelize} = require('sequelize')


const sequelize = new Sequelize('u802773601_tasks', 'u802773601_hostinger', 'W1e2s3l4e5i6@', {
      host: '185.239.210.103',
      dialect: 'mysql'
})




try{
     sequelize.authenticate();
     console.log('Conectado!')
}catch(err){
      console.log('Não conectado: ', err)
}



module.exports = sequelize
