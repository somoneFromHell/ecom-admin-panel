import React from 'react'
import { Card, CardBody, Col, Container, Input, Label, Row, Table } from 'reactstrap';
import BreadCrumb from '../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../Components/Common/PreviewCardHeader';
import UiContent from "../../Components/Common/UiContent";
import { Link } from 'react-router-dom';




const UserMaster = () => {
    document.title = "Basic Tables | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Basic Tables" pageTitle="Tables" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <PreviewCardHeader title="Responsive Tables" />
                                <CardBody>
                                    <p className="text-muted">Use <code>table-responsive</code> class to make any table responsive across all viewports. Responsive tables allow tables to be scrolled horizontally with ease.</p>
                                    <div className="live-preview">
                                        <div className="table-responsive">
                                            <Table className="align-middle table-nowrap mb-0">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th scope="col" style={{ "width": "42px" }}>
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck" />
                                                                <Label className="form-check-label" for="responsivetableCheck"></Label>
                                                            </div>
                                                        </th>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Customer</th>
                                                        <th scope="col">Purchased</th>
                                                        <th scope="col">Revenue</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck01" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck01"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#w-medium">#VZ2110</Link></td>
                                                        <td>10 Oct, 14:47</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jordan Kennedy
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Mastering the grid</td>
                                                        <td>$9.98</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck02" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck02"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2109</Link></td>
                                                        <td>17 Oct, 02:10</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jackson Graham
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Splashify</td>
                                                        <td>$270.60</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck03" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck03"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2108</Link></td>
                                                        <td>26 Oct, 08:20</td>
                                                        <td className="text-primary"><i className="ri-refresh-line fs-17 align-middle"></i> Refunded</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Lauren Trujillo
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Wireframing Kit for Figma</td>
                                                        <td>$145.42</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck04" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck04"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2107</Link></td>
                                                        <td>02 Nov, 04:52</td>
                                                        <td className="text-danger"><i className="ri-close-circle-line fs-17 align-middle"></i> Cancel</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Curtis Weaver
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Wireframing Kit for Figma</td>
                                                        <td>$170.68</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <div className="form-check">
                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="responsivetableCheck05" />
                                                                <Label className="form-check-label" htmlFor="responsivetableCheck05"></Label>
                                                            </div>
                                                        </th>
                                                        <td><Link to="#" className="fw-medium">#VZ2106</Link></td>
                                                        <td>10 Nov, 07:20</td>
                                                        <td className="text-success"><i className="ri-checkbox-circle-line fs-17 align-middle"></i> Paid</td>
                                                        <td>
                                                            <div className="d-flex gap-2 align-items-center">
                                                                <div className="flex-shrink-0">
                                                                    <img src="" alt="" className="avatar-xs rounded-circle" />
                                                                </div>
                                                                <div className="flex-grow-1">
                                                                    Jason schuller
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Splashify</td>
                                                        <td>$350.87</td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-light">
                                                    <tr>
                                                        <td colSpan="6">Total</td>
                                                        <td>$947.55</td>
                                                    </tr>
                                                </tfoot>
                                            </Table>

                                        </div>

                                    </div>
                                    
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default UserMaster