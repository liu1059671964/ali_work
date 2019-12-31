import styled from 'styled-components'

const ListWrap = styled.div`
       height:300px;
     width:850px;
     background:#fff;
     margin:32px 10px 32px 42px;
    .top{
        width:850px;
      height:50px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      span{
          font-size:14px;
          margin-left:14px;

      }
      p{
        font-size:14px;
          margin-right:14px;

      }
    }
    ul{
        padding:0;
        margin-top:1px;
        height:249px;
        width:100%;
        overflow:hidden;
        li{
            font-size:14px;
           display:flex;
           height:50px;
           justify-content:space-between;
           margin:0 14px;
           span{
               width:400px;
           } 
           h3{
              width:50px;
               font-weight:normal;
           }
           h4{
               width:80px;
               font-weight:normal
           }
           
        }
    }
`
export{
    ListWrap
}