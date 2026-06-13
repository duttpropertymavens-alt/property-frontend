import { useEffect } from "react";

function Services() {
  useEffect(()=>{
    window.scrollTo(0,0);
  }, []);
  return (
    <div
      style={{
        background: "#f7f6f3",
        color: "#142e63",
        minHeight: "100vh",
        padding: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          color: "#d8b13f",
          marginBottom: "50px",
        }}
      >
        Our Premium Services
      </h1>
      <p
  style={{
    textAlign: "center",
   color: "#142e63",
    maxWidth: "900px",
    margin: "0 auto 50px",
    lineHeight: "30px",
    fontSize: "18px",
  }}
>
  We provide trusted real estate solutions including luxury property buying,
  selling, rentals, and premium interior design services. Our goal is to help
  clients find modern homes with comfort, style, and the best investment value.
</p>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Property Buying</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            We help clients buy luxury villas, apartments, and premium homes
            at the best locations and prices.
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
           background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Property Selling</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Sell your property quickly with trusted real estate consultation
            and premium marketing support.
          </p>
        </div>

        {/* CARD 3 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Home Rent</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Find rental flats, luxury apartments, and comfortable family homes
            in prime city locations.
          </p>
        </div>

        {/* CARD 4 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Interior Design</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Modern and stylish interior solutions for luxury homes, villas, and
            commercial spaces.
          </p>
        </div>

        {/* CARD 5 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Plumbing</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Reliable plumbing solutions for homes, offices, kitchens,
            bathrooms, and complete water fitting work.
          </p>
        </div>

        {/* CARD 6 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Electrician</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Safe electrical wiring, fittings, lighting setup, repair work, and
            power solutions by skilled electricians.
          </p>
        </div>

        {/* CARD 7 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Flooring</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Premium tiles, marble, wooden flooring, and modern floor finishing
            for residential and commercial spaces.
          </p>
        </div>

        {/* CARD 8 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Material Supply</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Quality construction material supply including cement, steel,
            bricks, tiles, and finishing materials.
          </p>
        </div>

        {/* CARD 9 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Renovation</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Complete home, office, and shop renovation services with modern
            design, repair work, and quality finishing.
          </p>
        </div>

        {/* CARD 10 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Furniture Design</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Custom furniture design for homes, offices, bedrooms, living rooms,
            and premium interior spaces.
          </p>
        </div>

        {/* CARD 11 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
           background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Modular Kitchen Design</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Stylish modular kitchen planning with smart storage, premium
            fittings, and modern finishing.
          </p>
        </div>

        {/* CARD 12 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Smart Home Solution</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Smart lighting, CCTV, security systems, automation, and modern
            technology solutions for homes.
          </p>
        </div>

        {/* CARD 13 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Material Welding Design</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Welding and metal design work for gates, railings, frames,
            structures, and custom fabrication.
          </p>
        </div>

        {/* CARD 14 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
            background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Painting Service</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Interior and exterior painting, wall texture, polish work, and
            premium finishing for every space.
          </p>
        </div>

        {/* CARD 15 */}
        <div
          style={{
            border: "1px solid orange",
            padding: "30px",
            borderRadius: "15px",
            width: "320px",
             background: "#f7f6f3",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600"
            alt=""
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
              marginBottom: "20px",
            }}
          />

          <h2 style={{ color: "#d8b13f" }}>Land Ventures Service</h2>

          <p style={{ marginTop: "15px", lineHeight: "28px" }}>
            Land dealing, plotting, investment guidance, site visits, and
            trusted support for land ventures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
