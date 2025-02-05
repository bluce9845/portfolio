import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { CiMap } from "react-icons/ci";
import { BsTelephonePlus } from "react-icons/bs";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Contact = ({ id }) => {
  return (
    <>
      <section
        className="contact-container"
        id={id}
        style={{
          margin: "260px 0 0 38px",
          bottom: "100px",
        }}
      >
        <p className="head" data-aos="fade-right">
          GET IN TOUCH
        </p>
        <h4 className="second-head" data-aos="fade-up">
          CONTACT
        </h4>

        <div
          className="form-icon-container"
          style={{
            margin: "100px 0 0 0",
          }}
        >
          <div className="icons">
            <div className="email">
              <Form.Group md="4">
                <InputGroup data-aos="fade-right">
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    style={{
                      borderRadius: "none",
                      backgroundColor: "#2c98f0",
                    }}
                  >
                    <AiOutlineMail
                      style={{
                        color: "white",
                      }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="rizkyfiananda@gmail.com"
                    aria-describedby="email"
                    readOnly
                    style={{
                      maxWidth: "300px",
                    }}
                  />
                </InputGroup>

                <InputGroup className="mt-5" data-aos="fade-left">
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    style={{
                      borderRadius: "none",
                      backgroundColor: "#2c98f0",
                    }}
                  >
                    <CiMap
                      style={{
                        color: "white",
                      }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="2G6W+9C2 Grogol, Kabupaten Ponorogo, Jawa Timur"
                    aria-describedby="text"
                    readOnly
                    style={{
                      maxWidth: "390px",
                      fontSize: "0.9rem",
                    }}
                  />
                </InputGroup>

                <InputGroup className="mt-5" data-aos="fade-up">
                  <InputGroup.Text
                    id="inputGroupPrepend"
                    style={{
                      borderRadius: "none",
                      backgroundColor: "#2c98f0",
                    }}
                  >
                    <BsTelephonePlus
                      style={{
                        color: "white",
                      }}
                    />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="+62 821-4051-7882"
                    aria-describedby="text"
                    readOnly
                    style={{
                      maxWidth: "300px",
                    }}
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>

          <div className="form ms-5" data-aos="fade-left">
            <Form
              style={{
                borderRadius: "none",
              }}
            >
              <Form.Group
                data-aos="fade-left"
                className="mb-3"
                style={{
                  borderRadius: "none",
                }}
              >
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="Username"
                  style={{
                    border: "none",
                    maxWidth: "300px",
                    borderTop: "1px solid black",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Group>

              <Form.Group
                data-aos="fade-left"
                className="mb-3"
                style={{
                  borderRadius: "none",
                }}
              >
                <Form.Control
                  type="email"
                  className="text-center"
                  placeholder="Email"
                  style={{
                    border: "none",
                    maxWidth: "300px",
                    borderTop: "1px solid black",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Group>

              <Form.Group
                data-aos="fade-left"
                className="mb-3"
                style={{
                  borderRadius: "none",
                }}
              >
                <Form.Control
                  type="text"
                  className="text-center"
                  placeholder="Company (OPSIONAL)"
                  style={{
                    border: "none",
                    maxWidth: "300px",
                    borderTop: "1px solid black",
                    borderRadius: "0",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" data-aos="fade-left">
                <Form.Control
                  className="text-center"
                  as="textarea"
                  placeholder="Your Message"
                  rows={3}
                  style={{
                    maxWidth: "300px",
                    borderRadius: "0",
                    border: "none",
                    resize: "none",
                    borderTop: "1px solid black",
                    outline: "none",
                    boxShadow: "none",
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="text-center custom-button"
                style={{
                  width: "300px",
                  borderRadius: "0",
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
