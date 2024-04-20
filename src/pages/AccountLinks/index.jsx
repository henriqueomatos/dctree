import LinkItem from '@/components/LinkItem';
import LinkList from '@/components/LinkList';
import storage from '@/storage';

/*const links = [
  {
    label: "Quero aprender a programar"
  },
  {
    label: "Quero aprender data analytics"
  },
  {
    label: "Quero aprender marketing digital"
  },
  {
    label: "Inscreva-se nos nossos cursos",
    title: "Curso intensivo",
    description:"Veja aqui quais os cursos intensivos estão com turma abertas e garanta a sua vaga."
  },
  {
    label: "Clique e se inscreva",
    title: "Digital Plus",
    description: "Evento exclusivo para alunos!"
  }
  
]
*/

const links = storage.getAccountLinks();

export default function AccountLinks() {
    return(
    <LinkList>
      { links.map((item, index) => <LinkItem  key={index} {...item} />)}
    </LinkList>)
}

