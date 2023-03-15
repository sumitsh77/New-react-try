import faqImg from '../images/FAQ.png';

const FAQ = () => {
  return (
    <div id='faq' className='mx-auto py-20 text-center max-w-6xl'>
      <h1 className='text-2xl md:text-5xl font-bold text-center font-display'>Honoring the Past, Empowering the Future</h1>
      <br />
      <div className="flex flex-col lg:flex-row mx-auto text-left justify-between">
        {/* image section */}
        <div className=''>
          <img src={faqImg} alt="" />
        </div>
        <br />
        {/* Faq text section */}
        <div className="flex lg:w-1/2 flex-col space-y-4">
          {/* FAQ - 1 */}
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box shadow-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 peer-checked:text-white text-lg font-medium">
              What sets Us apart from other schools in the area
            </div>
            <div className="collapse-content  text-left">
              <p>Shir Raghunath Senior Sec School has a long-standing tradition of academic excellence and a commitment to providing a well-rounded education that includes a focus on character development, leadership skills, and community involvement. Our experienced faculty members are dedicated to providing personalized attention to each student, and we offer a wide range of extracurricular activities to help students develop their interests and talents.</p>
            </div>
          </div>
          {/* FAQ - 2 */}
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box shadow-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 peer-checked:text-white text-lg font-medium">
              What kind of academic support does We offer?
            </div>
            <div className="collapse-content text-left">
              <p>At Raghunath, we offer a variety of academic support services to help students succeed, including Online Courses, Online test exam, and academic coaching. We also have a dedicated team of counselors and learning specialists who work with students to develop personalized academic plans and provide support for any learning challenges.</p>
            </div>
          </div>
          {/* FAQ - 3 */}
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box shadow-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 peer-checked:text-white text-lg font-medium">
              What extracurricular activities does We offer?
            </div>
            <div className="collapse-content text-left">
              <p>We offer a wide range of extracurricular activities, including sports teams, music programs, drama clubs, and more. Our goal is to help students develop their interests and talents while fostering a sense of community and teamwork.</p>
            </div>
          </div>
          {/* FAQ - 4 */}
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box shadow-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 peer-checked:text-white text-lg font-medium">
              Does Raghunath offer financial aid or scholarships?
            </div>
            <div className="collapse-content text-left">
              <p>Yes, we offer a variety of financial aid and scholarship opportunities to help make our education accessible to families from all backgrounds. Please contact our admissions office for more information.</p>
            </div>
          </div>
          {/* FAQ - 5 */}
          <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box shadow-2xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title peer-checked:bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 peer-checked:text-white text-lg font-medium">
              What is the admission process at Raghunath?
            </div>
            <div className="collapse-content text-left">
              <p>Our admission process typically involves an application of student. We aim to ensure that each student who attends our school is a good fit for our community and will thrive academically, socially, and emotionally.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
