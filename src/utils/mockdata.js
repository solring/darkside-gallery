import testPic from '../assets/images/emilywang.jpg'

export const mockItem = {
  title: "Title",
  desc: "this is a test",
  height: 320,
  img: testPic,
  tags: ["tag1", "tag2", "tag3"],
}

/**
 * randN:
 * produce random number >=1 and <= n
 */
function randN(n) {
  return Math.floor(Math.random() * n) +1
}

function randH() {
  return 150 + Math.floor(Math.random() * 400)
}

export const genItems = (len) =>{
  return Array(len).fill(0).map((e, i) => {
    return {
      ...mockItem,
      tags: Array(randN(7)).fill(0).map((e, i) => `tag${i}`),
      height: randH(),
    }
  })
}