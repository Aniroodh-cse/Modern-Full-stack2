import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of The Professor",
    description: "Meet the mastermind who orchestrated Spain is greatest heist.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBuW-EeyFIPPHM7fApBQXEZm0eiaOgSRPJDg&s",
  },
  {
    id: 2,
    title: "Tokyo's Reckless Brilliance",
    description: "Dive into Tokyo is wild spirit and fierce loyalty.",
    image: "https://images.firstpost.com/wp-content/uploads/2020/12/money-heist.jpg?im=FitAndFill=(596,336)",
  },
  {
    id: 3,
    title: "Berlin: Elegance and Madness",
    description: "Why Berlin remains the most enigmatic character.",
    image: "https://www.rollingstone.com/wp-content/uploads/2022/06/LCDP_unit_101-JJG01109-0618-25c.jpg?w=1581&h=1054&crop=1",
  },
  {
    id: 4,
    title: "Nairobi's Legacy",
    description: "Her leadership and warmth made her irreplaceable.",
    image: "https://wallpapers.com/images/featured/professor-money-heist-pictures-1yegj3ptnd8g5noc.jpg",
  },
  {
    id: 5,
    title: "The Art of Resistance",
    description: "How the heist became a symbol of rebellion.",
    image: "https://images.hindustantimes.com/img/2021/08/31/1600x900/money_heist_1630404155391_1630404163247.jpg",
  },
  {
    id: 6,
    title: "Tokyo's Reckless Brilliance",
    description: "Dive into Tokyo's wild spirit and fierce loyalty.",
    image: "https://images.firstpost.com/wp-content/uploads/2020/12/money-heist.jpg?im=FitAndFill=(596,336)",
  },
  {
    id: 7,
    title: "Berlin: Elegance and Madness",
    description: "Why Berlin remains the most enigmatic character.",
    image: "https://www.rollingstone.com/wp-content/uploads/2022/06/LCDP_unit_101-JJG01109-0618-25c.jpg?w=1581&h=1054&crop=1",
  },
];

const BlogComp = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "rgb(89, 167, 198)", 
        minHeight: "100vh", 
      }}
    >
      <h1 style={{ textAlign: "center", color: "black" }}>Blog</h1><br/><br/>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {blogPosts.map(({ id, title, description, image }) => (
          <div
            key={id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1rem",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              width: "300px",
              flexShrink: 0,
              backgroundColor: "#fff", 
            }}
          >
            <img
              src={image}
              alt={title}
              width="100%"
              style={{ borderRadius: "8px", marginBottom: "1rem" }}
            />
            <h2 style={{ color: "#D32F2F" }}>{title}</h2>
            <p style={{ color: "#444" }}>{description}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComp;