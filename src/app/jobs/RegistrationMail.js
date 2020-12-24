import Mail from '../lib/Mail'

export default{
  key:'RegistrationMail',
  options:{
    //
  },
  async handle({data}){
    const {user} = data;

    await Mail.sendMail({
      from:'Microsoft <microsoft@microsoft.com',
      to:'kaio <kaio@gmail.com',
      subject:'cadastro',
      html:'Ola'
    
    });
  }
}
