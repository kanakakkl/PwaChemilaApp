import React, { Fragment } from 'react';
import styles from './LandingPage.module.scss';
import '../../App.css'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import data from '../../data/landingpage.json';


function LandingPage() {
    const iconsDiv = data[0].icons.map((item, index) => {
        return (
            <div class="col-md-6 col-6">
                <img src={item.imagesrc} width="12%" alt="alt" />
                <div className={styles.iconsDescCls}>{item.description}</div>
            </div>)
    })
    const renderedContent = data.map(response => {
        return (
            <Row style={{ maxWidth: '75%', margin: 'auto' }}>
                {response.imagePosition === "left" ?
                    <Col  xs={6} className={styles.sectionImgAnimation}>
                        <img src={response.imagesrc} className={styles.sectionArt} alt="alt" />
                    </Col> : null}
                {response.title ?
                    <Col  xs={response.textPosition === 'top_center' ? 12 : 6} className={response.textPosition === 'top_center' ? 'text-center' : 'text-left' + ' ' + `${styles.textCls}`}>

                        <span className={styles.sectionTitleCls}>{response.title}</span>
                        {response.imagePosition === "center" ?
                            <div><img src={response.imagesrc} width='65%' alt="alt" /></div> : null}
                        {response.description ?
                            <div>
                                <p className={styles.descCls}>{response.description.replace("\\n", "\n")}</p>
                            </div> : null}
                    </Col> :
                    null}
                {response.imagePosition === "right" ?
                    <Col xs={6} className={styles.sectionImgAnimation} >
                            <img src={response.imagesrc} className={styles.sectionArt}  alt="alt" />
                    </Col> : null}
            </Row>
        )
    });

    return (
        <Container fluid style={{ padding: '0px' }} >
            <Row className={styles.cover_page}>
                <Col style={{ padding: '0px' }}>
                    <Fragment>
                        <div className={styles.searchboxcls}>
                            <h4 className={'text-center' + ' ' + styles.textColor +' '+ styles.header1_cls }>World's First</h4>
                            <h3 className={'text-center' + ' ' + styles.textColor +' '+ styles.header2_cls}>Chemicals Wikipedia</h3>
                            <div className={styles.linecls}> </div>
                            <div className='text-center'>
                                <img src='../LandingPageAssets/First Logo.svg' width='32%' style={{ margin: '30px 0' }} alt="logo" />
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
                                            <img src='../LandingPageAssets/Search Icon.svg' className={'float-left' + ' ' + `${styles.btnoutlinesecondary}`} alt="img1" />
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button className={'mr-5' + ' ' + `${styles.btncls}`}>Buy Chemicals Online</Button>
                                <Button className={'mr-5' + ' ' + `${styles.btncls}`}>Sell Chemicals Online</Button>
                            </div>
                        </div>
                        <div class="container d-flex text-center" style={{marginBlockStart: '12%'}}>
                            {iconsDiv}
                        </div>
                    </Fragment>
                </Col>
            </Row>
            <div className={styles.cover_page2} style={{margin: '14px 0px'}}>
                {renderedContent}
            </div>
        </Container>
    );
}

export default LandingPage;
