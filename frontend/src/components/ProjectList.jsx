import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get("http://localhost:5000/api/projects");
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Submitted Projects</h2>
      <table className="table table-striped table-bordered mt-4">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>{project.name}</td>
              <td>{project.title}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleViewProject(project)}>
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal to show project details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProject && (
            <>
              <p>
                <strong>Name:</strong> {selectedProject.name}
              </p>
              <p>
                <strong>Description:</strong> {selectedProject.description}
              </p>
              <div className="d-flex justify-content-between">
                <a
                  href={selectedProject.livePreview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success">
                  View Live Preview
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark">
                  View GitHub Code
                </a>
              </div>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectList;
