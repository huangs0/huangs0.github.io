import { VitaeProps, vitaeInfo } from "./config";

function ItemLeft({ key, props }: { key: number, props: VitaeProps }) {
  return (
    <li key={key} className="py-6 lg:py-12 md:py-12 relative">
      {/* <div className="absolute left-[12px] top-[25%] -ml-[10px] w-5 h-5 bg-white rounded-full border-4 border-blue-900 z-10 md:hidden lg:hidden"></div> */}
      
      <div className="w-full md:w-[calc(50%-30px)] md:float-left">
        <div className="md:text-right sm:text-left before:absolute before:top-1/2 before:-mt-[10px] before:w-5 before:h-5 before:bg-white before:rounded-full before:border-4 before:border-blue-900 before:z-10 before:block
                             before:right-[calc(104%)] before:block md:before:hidden">
          <div className="inline-block relative">
                              {/* block mt-1 md:mt-0 md:inline text-xs text-blue-900 leading-none md:align-middle md:float-right md:ml-2 inline-block px-2 py-1 bg-gray-50 */}
            <span className="block mt-1 md:mt-0 md:inline text-xs text-blue-900 leading-none align-middle float-right md:float-left md:ml-2 sm:float-right inline-block px-2 py-1 bg-gray-50">
              {props.timespan}
            </span>
            <span className="inline bg-white px-3 py-1.5 rounded-md font-semibold shadow-[-1px_1px_1px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.15)]
                             before:absolute before:top-1/2 before:-mt-[10px] before:w-5 before:h-5 before:bg-white before:rounded-full before:border-4 before:border-blue-900 before:z-10 
                             before:left-[calc(100%+20px)] before:hidden md:before:block">
              {props.orgName}
            </span>
          </div>
          <div className="mt-2 mr-0 ml-auto px-0 py-0 text-sm leading-6 sm:text-left md:text-right">
            <b>{props.positionTitle}</b> <br/> {props.description}
          </div>
        </div>
      </div>
    </li>
  );
}

function ItemRight({ key, props }: { key: number, props: VitaeProps }) {
  return (
    <li key={key} className="py-6 lg:py-12 md:py-12 relative">
      {/* <div className="absolute left-[12px] top-[25%] -ml-[10px] w-5 h-5 bg-white rounded-full border-4 border-blue-900 z-10 md:hidden lg:hidden"></div> */}
      {/* <div className="absolute sm:left-[10px] sm:top-0 lg:left-1/2 lg:top-0 -ml-[10px] w-5 h-5 bg-white rounded-full border-4 border-blue-900 z-10 md:hidden lg:hidden"></div> */}

      <div className="w-full md:w-[calc(50%-30px)] md:float-right">
        <div className="md:text-left before:absolute before:top-1/2 before:-mt-[10px] before:w-5 before:h-5 before:bg-white before:rounded-full before:border-4 before:border-blue-900 before:z-10 before:block
                             before:right-[calc(104%)] before:block md:before:hidden">
          <div className="inline-block relative">
            <span className="block mt-1 md:mt-0 md:inline text-xs text-blue-900 leading-none md:align-middle float-right md:ml-2 inline-block px-2 py-1 bg-gray-50">
              {props.timespan}
            </span>
            <span className="inline bg-white px-3 py-1.5 rounded-md font-semibold shadow-[1px_1px_1px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.15)]
                             before:absolute before:top-1/2 before:-mt-[10px] before:w-5 before:h-5 before:bg-white before:rounded-full before:border-4 before:border-blue-900 before:z-10 before:block
                             before:right-[calc(100%+20px)] before:hidden md:before:block">
              {props.orgName}
            </span>
                
          </div>
          <div className="mt-2 mr-0 ml-auto px-0 py-0 text-sm leading-6 text-left">
            <b>{props.positionTitle}</b> <br/> {props.description}
          </div>
        </div>
      </div>
    </li>
  );
}

export function VitaePanel() {
  return (
    <div className="w-full">
      <div className="w-full mb-4">
        <h3 className="text-2xl font-bold w-full border-b-2 border-black pb-1">Vitæ</h3>
      </div>
      
      {/* 时间线容器 - 增加了底部间距确保垂直线完整显示 */}
      <ul className="relative w-full md:max-w-[800px] mx-auto mt-5 py-4 pb-8 list-none pl-[10%] md:pl-0
                     before:absolute before:left-0 md:before:left-1/2 before:top-0 before:bottom-0 
                     before:w-1.5 before:ml-2.5 md:before:-ml-[3px]
                     before:bg-gradient-to-b 
                     before:from-transparent before:via-gray-600 before:to-transparent
                     before:z-[5]">
        {vitaeInfo.map((item, idx) => (
          item.right ? <ItemRight key={idx} props={item}/> : <ItemLeft key={idx} props={item}/>
        ))}
      </ul>
    </div>
  );
}

// after:absolute after:-right-[20px] after:top-1/2 after:-mt-2
// after:border-4 after:border-t-transparent after:border-b-transparent 
// after:border-l-gray-50 md:after:border-l-gray-50 after:border-r-0

// import './timeline.css';

// export function VitaePanel() {
//   return (
//     <div className="w-full">
//       <div className="w-full mb-4">
//         <h3 className="text-2xl font-bold w-full border-b-2 border-black pb-1">Vitæ</h3>
//       </div>
//       <ul className="timeline">
//         <li>
//           <div className="direction-l">
//             <div className="flag-wrapper">
//               <span className="flag">University of Washington</span>
//               <span className="time-wrapper"><span className="time">2023 - now</span></span>
//             </div>
//             <div className="desc"><b>Assistant Professor</b> <br/> Information School</div>
//           </div>
//         </li>
//         <li>
//           <div className="direction-r">
//             <div className="flag-wrapper">
//               <span className="flag">MIT</span>
//               <span className="time-wrapper"><span className="time">2014 - 2020</span></span>
//             </div>
//             <div className="desc"><b>Ph.D. Student</b> <br/> Media Lab, Laboratory for Social Machines</div>
//           </div>
//         </li>
//       </ul>
//     </div>
//   );
// }