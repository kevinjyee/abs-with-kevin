(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/antlogo.b29324c4.svg"},161:function(e,t,a){e.exports=a.p+"static/media/abswithkevin.7748d484.svg"},190:function(e,t,a){e.exports=a(385)},385:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),r=a(51),l=a(52),i=a(21),s=a(160),u=a(18),d=a(24),E=a(81),m=a.n(E),h="attendance/GET_ATTENDANCE_REQUESTED",p="attendance/GET_ATTENDANCE_RECEIEVED",g=function(e){return function(e){e(k),m.a.get("https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/attendance",{}).then(function(t){var a;e((a=t.data,{type:p,attendance:a}))}).catch(function(e){})}};function k(){return{type:h}}var b={count:0,isIncrementing:!1,isDecrementing:!1},v="Workout/GET_WORKOUT_REQUESTED",f="Workout/GET_WORKOUT_RECEIEVED",w=function(e){return function(e){e(y),m.a.get("https://v2-api.sheety.co/d15b0998a5ba722b2df7464f83e6a997/absWithKevinApi/workout",{}).then(function(t){var a;e((a=t.data,{type:f,Workout:a}))}).catch(function(e){})}};function y(){return{type:v}}var T=Object(i.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b;switch((arguments.length>1?arguments[1]:void 0).type){case"counter/INCREMENT_REQUESTED":return Object(d.a)({},e,{isIncrementing:!0});case"counter/INCREMENT":return Object(d.a)({},e,{count:e.count+1,isIncrementing:!e.isIncrementing});case"counter/DECREMENT_REQUESTED":return Object(d.a)({},e,{isDecrementing:!0});case"counter/DECREMENT":return Object(d.a)({},e,{count:e.count-1,isDecrementing:!e.isDecrementing});default:return e}},attendance:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return console.log("GET ATTENDANCE REQUESTED"),Object(d.a)({},e,{loading:!0,data:t.attendance.attendance});case p:return console.log("GET ATTENDANCE RECEIVED"),console.log(e),console.log(t),Object(d.a)({},e,{loading:!1,data:t.attendance.attendance});default:return e}},workout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return console.log("GET WORKOUT REQUESTED"),Object(d.a)({},e,{loading:!0,data:t.Workout.workout});case f:return console.log("GET WORKOUT RECEIVED"),console.log(e),console.log(t),Object(d.a)({},e,{loading:!1,data:t.Workout.workout});default:return e}}}),O=u.a(),N=[s.a,Object(l.routerMiddleware)(O)],j=i.d.apply(void 0,[i.a.apply(void 0,N)].concat([])),D=Object(i.e)(Object(l.connectRouter)(O)(T),{},j),R=a(27),C=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"About Page"),o.a.createElement("p",null,"Did you get here via Redux?"))},I=a(82),S=a(83),_=a(91),x=a(84),W=a(92),A=a(388),P=a(387),U=(a(131),a(97),a(44)),M=a(167),G=a(114),K=a.n(G),L=a(161),Q=a.n(L),V=a(63),z=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(_.a)(this,Object(x.a)(t).call(this,e))).handleClick=function(e){console.log("click ",e),a.setState({current:e.key})},a.state={current:a.props.currentPage},a}return Object(W.a)(t,e),Object(S.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.currentPage!==this.props.currentPage&&this.setState({current:this.props.currentPage})}},{key:"render",value:function(){return this.state.current?o.a.createElement("div",null,o.a.createElement("div",{id:"header"},o.a.createElement("div",{className:"ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-5 ant-col-lg-5 ant-col-xl-5 ant-col-xxl-3"},o.a.createElement("a",{id:"logo"},o.a.createElement("img",{className:"brandLogo",src:K.a}),o.a.createElement("img",{className:"brandName",src:Q.a}))),o.a.createElement(U.a,{mode:"horizontal",onClick:this.handleClick,selectedKeys:[this.state.current],style:{lineHeight:"64px"}},o.a.createElement(U.a.Item,{key:"1"},o.a.createElement(V.a,{to:"/abs-with-kevin"},o.a.createElement(A.a,null),"Today's Workout")),o.a.createElement(U.a.Item,{key:"2"},o.a.createElement(V.a,{to:"/abs-with-kevin/past-workouts"},o.a.createElement(P.a,null),"Past Workouts"))))):o.a.createElement(M.a,null)}}]),t}(o.a.Component),H=a(386),B=a(186),J=a(389),q=Object(B.a)({"ant-table-thead":{backgroundColor:"blue"}}),F=[{title:"Rank",key:"rank",dataIndex:"rank",width:40},{title:"Name",key:"name",dataIndex:"name",width:50},{title:"Attendance",key:"total",dataIndex:"total",width:50},{title:" ",width:10,key:"smiley",dataIndex:"rank",render:function(e){return 1==e||2==e?o.a.createElement(J.a,{twoToneColor:"#faad14"}):2==e||3==e?o.a.createElement(J.a,{twoToneColor:"#1890ff"}):4==e||5==e?o.a.createElement(J.a,{twoToneColor:"#f759ab"}):void 0}}],X=[{title:"Workout",key:"workout",dataIndex:"workout",width:40},{title:" ",width:40,key:"image",dataIndex:"image",render:function(e){return o.a.createElement("img",{className:"hundred_x_hundred",src:e})}}],Y=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(_.a)(this,Object(x.a)(t).call(this,e))).state={attendanceList:a.props.attendance||[],workoutList:a.props.workout||[]},a}return Object(W.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.getAttendance(),this.setState({attendanceList:this.props.attendance}),this.props.getWorkout(),this.setState({workoutList:this.props.workout})}},{key:"componentDidUpdate",value:function(e,t){e.attendance!==this.props.attendance&&this.setState({attendanceList:this.props.attendance}),e.workout!==this.props.workout&&this.setState({workoutList:this.props.workout})}},{key:"render",value:function(){var e=this.state.attendanceList,t=this.state.workoutList;return e&&e.length>0&&t&&t.length?o.a.createElement("div",{className:"homebody"},o.a.createElement("div",{className:"center_title"},o.a.createElement("h3",null," ABS WITH KEVIN"),o.a.createElement("span",null,o.a.createElement("h5",null," 3:00 PM "),"Socialize/Mingle"),o.a.createElement("span",null,o.a.createElement("h5",null," 3:05 PM "),"ABS WITH KEVIN"),o.a.createElement("span",null,o.a.createElement("h5",null," 3:10 PM "),"Group Photo/Farewells")),o.a.createElement("div",{className:"page_grid"},o.a.createElement("div",{className:"half_page_ish"},o.a.createElement(H.a,{columns:F,dataSource:e,className:q,pagination:{pageSize:50},scroll:{y:600}})),o.a.createElement("div",{className:"half_page_ish"},o.a.createElement(H.a,{columns:X,dataSource:t,className:q,pagination:{pageSize:50},scroll:{y:600}})))):o.a.createElement("div",{className:"half_page_ish"},o.a.createElement(H.a,{columns:F,dataSource:[],pagination:{pageSize:50},scroll:{y:600}}))}}]),t}(o.a.Component);var Z=Object(r.connect)(function(e){return{attendance:e.attendance.data,loading:e.attendance.loading,workout:e.workout.data}},function(e){return Object(i.b)({getAttendance:g,getWorkout:w},e)})(Y),$=function(){return o.a.createElement("div",null,o.a.createElement(z,{currentPage:"1"}),o.a.createElement("main",null,o.a.createElement(R.Route,{exact:!0,path:"/abs-with-kevin/",component:Z}),o.a.createElement(R.Route,{exact:!0,path:"/abs-with-kevin/pass-workouts",component:C})))},ee=(a(384),document.querySelector("#root"));Object(c.render)(o.a.createElement(r.Provider,{store:D},o.a.createElement(l.ConnectedRouter,{history:O},o.a.createElement("div",null,o.a.createElement($,null)))),ee)},97:function(e,t,a){}},[[190,1,2]]]);
//# sourceMappingURL=main.02116220.chunk.js.map