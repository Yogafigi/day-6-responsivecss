class Testimonial {
  constructor(quote, image) {
    this._quote = quote;
    this._image = image;
  }

  get quote() {
    return this._quote;
  }

  get image() {
    return this._image;
  }

  get html() {
    return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.author}</p>
        </div>`;
  }
}

class AuthorTestimonial extends Testimonial {
  constructor(author, quote, image) {
    super(quote, image);
    this._author = author;
  }

  get author() {
    return this._author;
  }
}

class CompanyTestimonial extends Testimonial {
  constructor(company, quote, image) {
    super(quote, image);
    this._company = company;
  }

  get author() {
    return this._company + " Company";
  }
}

const testimonial1 = new AuthorTestimonial(
  "kaji teri",
  "terbang tinggi bersama burung",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
);

const testimonial2 = new AuthorTestimonial(
  "Jeger coding",
  "Tentangmu aku gatau yang jelas aku sangat rindu temu",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
);

const testimonial3 = new AuthorTestimonial(
  "Bagas adi",
  "Teman ku baik",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].html;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;
