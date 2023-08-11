import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../../hook/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((data) => data.category === "popular");
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItem = data.filter((item) => item.category === "popular");
  //       setMenu(popularItem);
  //     });
  // }, []);
  return (
    <section className="m-12">
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {popularItem.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to="/menu">
          <button className="btn btn-outline block  border-0 border-b-4 mt-4 mx-auto">
            View Full Menu
          </button>
        </Link>
      </section>
    </section>
  );
};

export default PopularMenu;
