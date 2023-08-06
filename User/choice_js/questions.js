const myQuestions = []
var course_id = 0

async function getQuestions() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('course_id');

  course_id = id

  const response_checkquiz = await fetch("http://127.0.0.1:8000/ShowCourseTest/" + id, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
      },

  })
  const json = await response_checkquiz.json()
  const data = json.data
  

  for (let i=0; i<data.length; i++) {
 
  let correctAnswer = ""
    
    if (data[i].question_ans1 == data[i].question_correct) {
      correctAnswer = "a"
    }
    else if (data[i].question_ans2 == data[i].question_correct) {
      correctAnswer = "b"
    }
    else if (data[i].question_ans3 == data[i].question_correct) {
      correctAnswer = "c"
    }
    else if (data[i].question_ans4 == data[i].question_correct) {
      correctAnswer = "d"
    }

  myQuestions.push({
    title: "คำถามข้อที่ " + (i+1),
    question: data[i].question_title,
    /*background: "<img src='./img/bg_slide1.jpg' width=1000 height=660>",*/
    answers: {
      a: data[i].question_ans1,
      b: data[i].question_ans2,
      c: data[i].question_ans3,
      d: data[i].question_ans4
    },
    correctAnswer: correctAnswer,
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  })
  }
console.log(myQuestions)
}


const myQuestions1 = [
  {
    title: "คำถามข้อที่ 1",
    question: "ลำธารไหลผ่านหมู่บ้านแห่งหนึ่ง เป็นลำธารที่สำคัญที่ช่วยหล่อเลี้ยงชีวิตของผู้คนในหมู่บ้าน<p>คำว่า 'ลำธาร' ในข้อความมีความสอดคล้องข้อใดมากที่สุด</p>",
    /*background: "<img src='./img/bg_slide1.jpg' width=1000 height=660>",*/
    answers: {
      a: "ประชากร",
      b: "แหล่งที่อยู่",
      c: "ชีวภูมิภาค",
      d: "ระบบนิเวศ"
    },
    correctAnswer: "d",
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  },
  {
    title: "คำถามข้อที่ 2",
    question: "สิ่งมีชีวิตในข้อใดที่มีรูปแบบความสัมพันธ์ต่างจากข้ออื่นมากที่สุด",
    /*background: "<img src='./img/bg_slide2.jpg' width=1000 height=660>>",*/
    answers: {
      a: "ผึ้งและพืชดอก",
      b: "มดดำและเพลี้ย",
      c: "นกเอี้ยงกับควาย",
      d: "โปรโตซัวในลำไส้ปลวก"

    },
    correctAnswer: "b",
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  },
  {
    title: "คำถามข้อที่ 3",
    question: "ข้อใดไม่ใช่คุณสมบัติของสิ่งมีชีวิต",
    /*background: "<img src='./img/bg_slide3.jpg' width=1000 height=660>>",*/
    answers: {
      a: "การแตกหน่อของผักตบชวา",
      b: "การงอกของเมล็ดพืชเมื่อได้รับน้ำ",
      c: "การหันหาแสงของดอกทานตะวัน",
      d: "การแลกเปลี่ยนแก๊สทางใบของพืช"
    },
    correctAnswer: "b",
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  },
  {
    title: "คำถามข้อที่ 4",
    question: "พืชชนิดหนึ่งออกดอก ก่อนที่ดอกจะบาน ชาวสวนได้นำกระดาษมาหุ้มดอกไว้ เมื่อเวลาผ่านไปพบว่ามีการติดผลเกิดขึ้น ภายในผลพบว่ามีเมล็ด ข้อใดกล่าวได้ถูกต้องที่สุดเกี่ยวกับพืชชนิดนี้",
    /*background: "<img src='./img/bg_slide4.gif' width=1000 height=660>>",*/
    answers: {
      a: "ผลที่เกิดขึ้นเรียกว่า ผลลม เนื่องจากมีเมล็ด",
      b: "พืชชนิดนี้ไม่มีการถ่ายละอองเรณูตามธรรมชาติ",
      c: "ดอกของพืชชนิดนี้จัดอยู่ในกลุ่มดอกสมบูรณ์เพศ",
      d: "พืชชนิดนี้สืบพันธุ์แบบอาศัยเพศหรือไม่อาศัยเพศก็ได้"
  
    },
    correctAnswer: "a",
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  },
  {
    title: "คำถามข้อที่ 5",
    question: "พฤติกรรมการรับประทานอาหารในข้อใดที่เหมาะสมที่สุด",
    /*background: "<img src='./img/bg_slide5.jpg' width=1000 height=660>>",*/
    answers: {
      a: "ไม่รับประทานอาหารที่มีไขมันเป็นส่วนประกอบเพื่อป้องกันการเกิดโรคอ้วน",
      b: "เลือกรับประทานอาหารที่ไม่ปรุงโดยใช้ความร้อนเพื่อคงคุณค่าสารอาหาร",
      c: "เลือกอาหารที่มีใยอาหารสูงน้ำตาลต่ำและมีสารอาหารครบถ้วนเพียงพอ",
      d: "รับประทานอาหารเสริมเพื่อป้องกันการขาดสารอาหาร"
    },
    correctAnswer: "c",
    correctAnswerText: "คำตอบถูกต้อง!",
    falseAnswerText: "คำตอบไม่ถูกต้อง!"
  }
];