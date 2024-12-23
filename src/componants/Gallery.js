// components/Gallery.js
import { useState } from "react";
import Image from 'next/image';


const Gallery = ({ items }) => {
   const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filterItems = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.categories.includes(selectedCategory));


  return (
    <div>
      <div className="categories">
        <button onClick={() => filterItems("All")}
          className={selectedCategory === "All" ? "selected" : ""}> All </button>
            <button onClick={() => filterItems("Leadership Team")}
		className={selectedCategory === "Leadership Team" ? "selected" : ""}>Leadership Team</button>
          <button onClick={() => filterItems("Adult Medicine")}
		className={selectedCategory === "Adult Medicine" ? "selected" : ""}>Adult Medicine</button>
      
        <button onClick={() => filterItems("Behavioral Health")}
		className={selectedCategory === "Behavioral Health" ? "selected" : ""}>Behavioral Health</button>
		 <button onClick={() => filterItems("OBGYN")}
		 className={selectedCategory === "OBGYN" ? "selected" : ""}>OBGYN</button>
        <button onClick={() => filterItems("Pediatric Care")}
		className={selectedCategory === "Pediatric Care" ? "selected" : ""}>Pediatric Care</button>
        
        <button onClick={() => filterItems("Vision Care")}
		className={selectedCategory === "Vision Care" ? "selected" : ""}>Vision Care</button>
      </div>

      <div className="gallery row ">
        {filteredItems.map((item) => (
          <div key={item.id} className=" col-md-3" onClick={() => openModal(item)}>
		   <div className="gallery-item">
			<div class="galleryimg">
				<Image src={item.image} alt={item.title}  width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
				<div class="overlaybx">&#43;</div>
           </div>
            <div class="teamdesc">
				<h3>{item.title}</h3>
				<p >{item.categories}</p>
			</div>
          </div>
		   </div>
        ))}
      </div>
	  {selectedItem && (
        <div className="modal modalselected">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedItem.title}</h2>
			 <div class="d-flex align-items-start">
			  <div class="modal-img">
				<Image src={selectedItem.image} alt={selectedItem.title} className="img-fluid" width={0}  height={0} sizes="100vw" style={{ width: 'auto', height: 'auto' }}/>
			  </div>
			  <div class="modeldesc">	
				 {selectedItem.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
			  </div>
			</div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default Gallery;