import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { BsInbox } from "react-icons/bs";
import { AiOutlineHistory } from "react-icons/ai";
import { MdOutlineVideoSettings } from "react-icons/md";
import { BsBoxArrowRight } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi";
import { TbLetterN } from "react-icons/tb";
import "./index.css";


function KanbasNavigation() {
  const links = [ { label: "NortheasternUniversity", isSpecial: true },"Account", "Dashboard", "Courses", "Calendar","Inbox","History","Studio","Commons","Help"];

  const linkToIconMap = {
    NortheasternUniversity: <TbLetterN className="wd-icon-n" />,
    Account: <BiUserCircle className="wd-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <BsInbox className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <MdOutlineVideoSettings className="wd-icon" />,
    Commons: <BsBoxArrowRight className="wd-icon" />,
    Help: <BiHelpCircle className="wd-icon" />,
    
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 100 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[typeof link === "object" ? link.label : link]}
          <br/>
          {
            link.isSpecial 
            ? (
                <>
                    <span className="no-gap">Northeastern</span>
                    <span className="no-gap">University</span>
                </>
              )
            : link.label || link
          }
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;