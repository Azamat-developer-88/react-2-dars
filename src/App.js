import "./styles.css";
import Users from "./components/Users";
export default function App() {
  return (
    <div className="App">
      <h3>Birinchi user:</h3>
      <Users
        firstName="Dilmurod"
        lastName="Qodirov"
        jobs="O'qituvchi"
        age="35"
      />
      <h3>Ikkin user:</h3>
      <Users
        firstName="Mirzaboyev"
        lastName="Azamat"
        jobs="O'quvchi"
        age="36"
      />
      <h3>Uchinchi user:</h3>
      <Users firstName="Hasan" lastName="Toraxmatov" jobs="O'quvchi" age="20" />
      <h3>To'rtinchi user:</h3>
      <Users
        firstName="Murodxo'ja"
        lastName="Nosirov"
        jobs="O'quvchi"
        age="22"
      />
      <h3>Beshichi user:</h3>
      <Users firstName="O'ral" lastName="Poyonov" jobs="O'qituvchi" age="35" />
      <h3>oltinchi user:</h3>
      <Users
        firstName="Javohir"
        lastName="Yeshmuratov"
        jobs="O'quvchi"
        age="36"
      />
      <h3>yettinci user:</h3>
      <Users
        firstName="Shoxrux"
        lastName="Abdumalikov"
        jobs="O'quvchi"
        age="20"
      />
      <h3>sakkizinchi user:</h3>
      <Users firstName="Javlon" lastName="To'layev" jobs="O'quvchi" age="22" />
      <h3>to'qizinchi user:</h3>
      <Users firstName="Ixlombek" lastName="Musayev" jobs="O'quvchi" age="25" />
      <h3>o'ninchi user:</h3>
      <Users firstName="Baxtiyor" lastName="Anvarov" jobs="O'quvchi" age="26" />
    </div>
  );
}
