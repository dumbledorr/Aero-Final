import React, { useEffect, useState } from "react";
import { Button, FormGroup, Input, Row, Col } from "reactstrap";

const Company = ({ id, index, deleteCompany, mode , templateType}) => {
    const [name, setName] = useState("");
    const [fromYear, setFromYear] = useState("");
    const [toYear, setToYear] = useState("");
    const [designation, setDesignation] = useState("");

    return (
        <div className="item-wrapper pl-30">
            <div className="item-header">
                

                {(mode === "edit" || mode === "create") && (
                    <>
                    <span className="item-heading">Company {index + 1}</span>
                    <Button onClick={() => deleteCompany(id)} color="danger">
                        Delete
                    </Button>
                    </>
                )}
            </div>
            <Row>
                <Col md={12}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={name}
                                spellCheck="true"
                                onChange={(e) => setName(e.target.value)}
                                id={`company-${id}`}
                                name={`company-${id}`}
                                placeholder="Company Name"
                            />
                        ) : (
                            <>
                                <div className="info-field info-field-style">{name}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
                <Col md={6} className={`${(mode === "edit" || mode === "create") ?'designation':''}`}>
                    <FormGroup>
                        {mode === "edit" || mode === "create" ? (
                            <Input
                                required
                                value={designation}
                                spellCheck="true"
                                onChange={(e) => setDesignation(e.target.value)}
                                id={`designation-${id}`}
                                name={`designation-${id}`}
                                placeholder="Designation"
                            />
                        ) : (
                            <>
                                <div className="info-title">Designation</div>
                                <div className="info-field">{designation}</div>
                            </>
                        )}
                    </FormGroup>
                </Col>
                {mode === "edit" || mode === "create" ? (
                <>
                <Col md={3}>
                    <div>From</div>
                    <FormGroup>
                            <Input
                                required
                                value={fromYear}
                                onChange={(e) => setFromYear(e.target.value)}
                                id={`year-${id}`}
                                name={`year-${id}`}
                                placeholder="From"
                                type="date"
                            />
                    </FormGroup>
                </Col>
                <Col md={3}>
                    <div>To</div>
                    <FormGroup>
                            <Input
                                required
                                value={toYear}
                                min="1900"
                                max="2023"
                                onChange={(e) => setToYear(e.target.value)}
                                id={`year-${id}`}
                                name={`year-${id}`}
                                placeholder="To"
                                type="date"
                            />
                    </FormGroup>
                </Col>
                </>) :
                    <Col md={templateType=== 1 ? 12 : 6}>
                    <div className="info-title">Year</div>
                    <div className="info-field">{fromYear} to {toYear}</div>
                    </Col>
                }
            </Row>
        </div>
    );
};

export default Company;
