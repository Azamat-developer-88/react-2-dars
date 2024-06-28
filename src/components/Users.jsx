const hello = <h1>Salom Dasturchilar!!</h1>;

export default function Users(props) {
  return (
    <h3>
      Meni ismim {props.firstName} familyam {props.lastName} yoshim {props.age}
      da men {props.jobs}
    </h3>
  );
}
