
import React from "react";

const courseData = [
  {
    image: "/images/rafiki1.png",
    title: "MBTI",
    description: `The Myers-Briggs Type Indicators Were Created During World War II,
    To Help Those Women Entering The Industrial Workforce, To Identify
    The Sort Of War-Time Jobs, In Which They Would Be most Comfortable
    And Effective. There Are 16 Different Personality Types, None Of
    Which Are Any Better Or Worse, Than The Others (Just Different),
    They Are Based On The. Following. . Four Pairs Of Personality
    Attributes:
  `,
    description2:`(E) Extroversion / (I) Introversion
    (S) Sensing / (N) Intuition
    (T) Thinking / (F) Feeling
    (J) Judgment / (P) Perception`,
  },
  // Add three more course objects here with their respective data
  {
    image: "/images/pana22.png",
    title: "Face-face",
    description: `The Myers-Briggs Type Indicators Were Created During World War II,
    To Help Those Women Entering The Industrial Workforce, To Identify
    The Sort Of War-Time Jobs, In Which They Would Be most Comfortable
    And Effective. There Are 16 Different Personality Types, None Of
    Which Are Any Better Or Worse, Than The Others (Just Different),
    They Are Based On The. Following. . Four Pairs Of Personality
    Attributes:
  `,
    description2:`(E) Extroversion / (I) Introversion
    (S) Sensing / (N) Intuition
    (T) Thinking / (F) Feeling
    (J) Judgment / (P) Perception`,
  },
  // {
  //   image: "/images/cuate.png",
  //   title: "Group or Individual",
  //   description: `The Myers-Briggs Type Indicators Were Created During World War II,
  //   To Help Those Women Entering The Industrial Workforce, To Identify
  //   The Sort Of War-Time Jobs, In Which They Would Be most Comfortable
  //   And Effective. There Are 16 Different Personality Types, None Of
  //   Which Are Any Better Or Worse, Than The Others (Just Different),
  //   They Are Based On The. Following. . Four Pairs Of Personality
  //   Attributes:
  // `,
  //   description2:`(E) Extroversion / (I) Introversion
  //   (S) Sensing / (N) Intuition
  //   (T) Thinking / (F) Feeling
  //   (J) Judgment / (P) Perception`,
  // },
  {
    image: "/images/rafiki3.png",
    title: "Telephone Counselling",
    description: `The Myers-Briggs Type Indicators Were Created During World War II,
    To Help Those Women Entering The Industrial Workforce, To Identify
    The Sort Of War-Time Jobs, In Which They Would Be most Comfortable
    And Effective. There Are 16 Different Personality Types, None Of
    Which Are Any Better Or Worse, Than The Others (Just Different),
    They Are Based On The. Following. . Four Pairs Of Personality
    Attributes:
  `,
    description2:`(E) Extroversion / (I) Introversion
    (S) Sensing / (N) Intuition
    (T) Thinking / (F) Feeling
    (J) Judgment / (P) Perception`,
  },
];

function Courses() {
  return (
    <div>
      <div className="container">
        <div className="my-[30px] md:my-[40px]">
          <h2 className="font-semibold text-[24px] text-center  md:text-[30px] ">Suggested Short Courses in Counselling</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-2 2xl:gap-5 ">
          {courseData.map((course, index) => (
            <>
              <div
                key={index}
                className="shadow-xl border bg-white border-gray-300 w-[100%] rounded-[28px]  mb-4"
              >
                <div className="">
                  <div className="p-3 h-[99px]">
                    <div className="flex gap-3 2xl:gap-5 items-center">
                      <img src={course.image} alt={course.title} />
                      <h2 className="text-[22px] 2xl:text-[26px]  font-semibold">{course.title}</h2>
                    </div>
                  </div>
                  <hr className="mb-1 border-gray-400" />
                  <p className="text-[13px]  px-3 pt-3">
                    {course.description}
                  </p>
                  <p className="text-[13px] whitespace-pre-line  p-3  mb-1 ">
                    {course.description2}
                  </p>
                </div>
                <div className="bg-[#25bdea] p-4  rounded-b-[28px]">
                  <h4 className="text-[20px] text-center text-white font-semibold">
                    Take MBTI Test
                  </h4>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
