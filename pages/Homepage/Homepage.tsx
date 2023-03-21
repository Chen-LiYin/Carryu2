
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header"
import Nav from "../../components/Nav";

export default function Homepage() {
  return (
    <div>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@500&family=Readex+Pro:wght@200;300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Titillium+Web&display=swap"
          rel="stylesheet"
        />
      </head>
      
      <Header/>
      
      <Nav/>

      <body>
        <div className="bg-[#F4F2EC] h-[300px] m-2 rounded-sm">
            05
        </div>
      </body>

    </div>
  );
}
