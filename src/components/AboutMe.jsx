import { useContext } from "react";
import DownloadButton from "./DownloadButton";
import { AppContext } from "./context/AppContext";
import stephenCVLink from "../assets/docs/stephen-ojeogwu-CV.pdf";



// eslint-disable-next-line react/prop-types
const AboutMe = () => {
  
  const { aboutRef } = useContext(AppContext);


  return (
    <section id="aboutme" ref={aboutRef}
      className="skill w-full relative flex flex-col justify-center items-center md:h-[1100px] sm:h-[800px] 
        xs:h-[770px] h-[650px] sm:mb-[70px] xs:mb-0 mb-[10px]">

      <div className="flex flex-col justify-center items-center sm:rounded-[64px] xs:rounded-[50px] rounded-[30px] 
        bg-black/95 absolute z-[1] sm:top-0 xs:-top-[11%] -top-[15%] sm:py-[10%] py-[8%] sm:w-[80%] xs:w-[90%] 
        w-[95%]">

          <div className="flex flex-col justify-center items-center sm:w-[70%] xs:w-[80%] w-[92%]">

            <div className="flex flex-col justify-center items-center w-full">

              <div className="flex justify-start items-center sm:mb-10 mb-4 w-full">
                <div className="font-poppins text-center font-bold text-white md:text-[45px] 
                  sm:text-[40px] xs:text-[35px] text-[27px] xs:ml-4 ml-2">
                  About me
                </div>
              </div>

              <div className="w-full">
                <div className="font-poppins w-full text-gray-300 text-start md:text-[19px] sm:text-[17px] 
                  xs:text-[15px] xxs:text-[14px] text-[12px] sm:mb-1 mb-3 md:leading-[28px] xs:leading-[25px] 
                  leading-[20px]">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Jolomi Christabel Stephen a data 
                  analyst and computer scientist. As a data analyst and 
                  computer scientist with a unique blend of experience in both the technical and customer-facing 
                  aspects of the banking sector, I bring a comprehensive skill set to the table. With two years of 
                  experience working as a teller and in customer experience, I have developed a deep understanding of 
                  the financial industry&apos;s operational dynamics and the importance of customer satisfaction.
                  <br/><br/>
                  My journey began in the banking sector, where I honed my skills in customer service, transaction 
                  processing, and financial product knowledge. This hands-on experience allowed me to understand the 
                  intricacies of banking operations and the needs of diverse customer bases. I was consistently praised 
                  for my ability to resolve complex customer issues efficiently and provide personalized service, which 
                  significantly enhanced customer satisfaction scores.
                  <br/><br/>
                  Parallel to my banking career, I pursued my passion for data analysis and computer science. I hold a 
                  degree in Computer Science, which has equipped me with strong analytical skills, proficiency in 
                  programming languages such as Python and R, and expertise in data visualization tools like Tableau 
                  and Power BI. My ability to analyze large datasets, identify trends, and derive actionable insights 
                  has been invaluable in optimizing banking processes and improving customer experiences.
                  <br/><br/>
                  Combining my technical skills with my banking experience, I am well-positioned to drive data-driven 
                  decision-making and innovation within the financial sector. My goal is to leverage data analytics to 
                  enhance operational efficiency, improve customer engagement, and contribute to the development of 
                  innovative financial products and services. I am excited about the opportunity to bring my unique 
                  blend of technical and customer-centric skills to a dynamic team and contribute to the success of 
                  forward-thinking organizations.
                </div>
              </div>

            </div>

            <div className="w-full md:mt-6 sm:mt-4 mt-2">
              <DownloadButton resumeLink={stephenCVLink} />
            </div>

          </div>

      </div>

    </section>
  )
}

export default AboutMe

