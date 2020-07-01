import React from 'react';
import styles from './LandingPage.module.scss';
import '../../App.css'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import data from '../../data/landingpage.json';


function LandingPage() {
  const renderedContent = data.map(response => {
    return (
      <Row>
        {response.title ?
          <Col className={response.textPosition === 'text-center' + ' ' + styles.textCls}  style={{margin: '14px 0px'}}>  
            {response.imagePosition === "center" ?
              <div className="text-center"><span className={styles.titleCls}>{response.title}</span><img src={response.imagesrc} width='90%' alt="alt" /></div> :
              <div className={styles.sectionImgAnimation}><img src={response.imagesrc} className={styles.sectionArt}  alt="alt" /></div>}
            {response.description ?
              <div>
                <span className={styles.titleCls}>{response.title}</span>
                <p className={styles.descCls}>{response.description.replace("\\n", "\n")}</p>
              </div> : null}
          </Col>
           :
          <Col className={'text-center' + ' ' + styles.displayflex}  style={{margin: '14px 0px'}}>
            {response.icons && response.icons.map((item, index) => {
              return (<div className={index === 0 ? styles.floatRight : styles.floatLeft}>
                <img src={item.imagesrc} width={index === 0 ? '40%' : '80%'} alt="alt" />
                <div className={styles.iconsDescCls}>{item.description}</div>
              </div>)
            })}
          </Col>}
      </Row>
    )
  });

  return (
    <Container fluid>
      <div>
        <div className={styles.searchboxcls}>
          <h4 className={'text-center' + ' ' + styles.textColor + ' ' + styles.header1_cls}>World's First</h4>
          <h3 className={'text-center' + ' ' + styles.textColor + ' ' + styles.header2_cls}>Chemicals Wikipedia</h3>
          <div className={styles.linecls}> </div>
          <div className='text-center'>
            <img src='../LandingPageAssets/First Logo.svg' width='32%' style={{ margin: '24px 0' }} alt="logo" />
          </div>
          <div className='text-center'>
            <InputGroup className={"mb-2" + ' ' + styles.textCls} >
              <FormControl
                placeholder="Search by CAS No. / Chemical Name / SMILES Code / InChl"
                aria-label="Search by CAS No. / Chemical Name / SMILES Code / InChl"
                aria-describedby="basic-addon2"
                className={'form-control' + ' ' + styles.inputcls}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary">
                  <img src='../LandingPageAssets/Search Icon.svg' className={'float-left' + ' ' + `${styles.btnoutlinesecondary}+' ' +${styles.btnsearchcls}`} alt="img1" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
            <Button className={'mr-3' + ' ' + `${styles.btncls}`}>Buy Chemicals Online</Button>
            <Button className={'mr-3' + ' ' + `${styles.btncls}`}>Sell Chemicals Online</Button>
          </div>
        </div>
        <div>
          <img src='../LandingPageAssets/First Illustration.svg' width="100%" alt='wordmark' />
        </div>
        <div  style={{margin: '14px 0px'}}>
           {renderedContent}
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
