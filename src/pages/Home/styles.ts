/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import imgClock from "../../assets/clock.svg";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapper = styled.div`
    width: 120rem;
    height: 100%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerImageAndText = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding-top: 8rem;
    gap: 2rem;
`;

export const ContainerA = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 57rem;

    img{
        width: 100%;
        
    }
`;

export const ContainerB = styled.section`
    width: 40%;
    padding-top: 5rem;
    height: 57rem;

    .subtitle{
        font-size: 2.4rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var2};
    }
    .subtitle:before{
        background-color: ${(props) => props.theme.var4};
        content: "";
        display:flex;
        height: 2px;
        position: relative;
        vertical-align: middle;
        width: 80%;
        margin-bottom: 2rem;
        border-radius: 10px;
    }

    .title{
        max-width: 48.2rem;
        margin-block: 2rem;
        font-size: 4.8rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var5};
    }

    .paragraph{
        font-size: 1.6rem;
        font-weight: 700;     
        color: ${(props) => props.theme.var6};
        margin-bottom: 4.5rem;
    }
    .containerButton{
        display: flex;
        gap: 2rem;
    }
`;

export const ContainerC = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row; 
    width: 100%;

    
     
`;

export const CardSocialApproval = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    
    width: 44.2rem;
    height: 20rem;
    padding: 2.4rem 2.4rem 2rem 2.4rem;
    background: #FFFFFF;
    box-shadow: 10px 10px 40px rgba(192, 197, 233, 0.6);
    border-radius: 20px;

    img{
        width: 80px;
        border-radius: 50%;
    }

    p{
        font-size: 1.4rem;
        font-weight: 400;
        color: ${props => props.theme.var6};
    }
    .img-clock{
        position: absolute;
        width:198px;
        left: 77.22%;
        right: 0.03%;
        top: 70.62%;
        bottom: 69.63%;

        opacity: 0.7;
        z-index: -1;
}
`;

export const BoxUserImgName = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 2.4rem;
    margin-bottom: 1.6rem;

    h2{
    font-size: 1.6rem;
    font-weight: 700;
    color: ${props => props.theme.var5};
    }

    p{
    font-size: 1.2rem;
    font-weight: 400;
    color: ${props => props.theme.var6};
    }
`;

export const CardCreateAccountText = styled.div`
    width: 20rem;
    display: flex;
    flex-direction: column;

    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.var5};
  
    span{
        margin-bottom: 1rem;
    }
    span:before{
        background-color: ${(props) => props.theme.var5};
        content: "";
        display:flex;
        height: 4px;
        position: relative;
        vertical-align: middle;
        width: 100%;
        margin-bottom: 1rem;
        border-radius: 10px;
    }    
`;

export const WrapperCardAdvantages = styled.div`
    display: flex;
    gap: 2rem;
    margin: 4rem;
`;

export const SectionAdvantages = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 14rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .title{
        font-size: 4.8rem;
    }
`;