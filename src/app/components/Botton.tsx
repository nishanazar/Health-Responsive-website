interface IBotton {
  text: string;
  bgColor : string;
}

const Botton = ({text, bgColor}: IBotton) => {
  return (
    <div>
     <button className={`px-5 py-3  ${bgColor} rounded-lg hover:bg-[#3e65ab] text-white text-[13px] font-semibold`}>{text}</button>
    </div>
  )
}

export default Botton