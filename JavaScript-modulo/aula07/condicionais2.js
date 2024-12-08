// Muito útil quando sua variál possui valores específicos

const permissoes = 'aluno' // 'aluno' || 'professor' || 'admin'

switch(permissoes){
  case 'aluno':
    console.log('Você pode visualizar as aulas.')
    break;
  case 'Professor':
    console.log('Você pode alterar as aulas e adicionar exercícios.')
    break;
  case 'admin':
    console.log('Você pode fazer o que quiser no sistema!')
    break;
  default:
    console.log('Não sei quem você eh no sistema!')
}