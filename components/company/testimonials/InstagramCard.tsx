import Edit from "../../svg/Edit";
import Trash from "../../svg/Trash";
import Modal from "../modal/Modal";
import { useState } from "react";
import ClickAwayListener from "react-click-away-listener";
import { UPDATE_INSTAGRAM } from "../../../graphql/company/mutation/UpdateTestimonials";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { DELETE_INSTAGRAM } from "../../../graphql/company/mutation/DeleteInstagram";
import { clientCompany } from "../../../lib/apolloClient";
import ALL_INSTAGRAM from "../../../graphql/company/query/allInstagram";
import Image from "next/image";

export default function InstagramCard({ image, name, message, id }) {
  const [deleteInstagram, { data: deleteID }] = useMutation(DELETE_INSTAGRAM, {
    client: clientCompany, refetchQueries: [{ query: ALL_INSTAGRAM}]
  });

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const [updateProductsAvailable, { data }] = useMutation(UPDATE_INSTAGRAM, {
    client: clientCompany, refetchQueries: [{ query: ALL_INSTAGRAM}]
  });
  const [editTestimonial, setEditTestimonial] = useState({
    name,
    image,
    message
  });

  const [open, setOpen] = useState({
    name: false,
    image: false,
    message: false
  });

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (name) => {
    updateProductsAvailable({
      variables: {
        id,
        data: editTestimonial
      }
    });
    refreshData();

    setOpen({ ...open, [name]: false });
  };

  return (
    <>
      <div className="sm:px-3 w-full h-48">
        
        <div className="w-full mx-auto  h-48 rounded-lg bg-white px-4 py-4 text-gray-800 font-light mb-6">
        <button
            onClick={() => setOpenModal(true)}
            className="focus:outline-none flex ml-auto"
          >
            <Trash className="h-6 w-6 text-red-900" />
          </button>
          <div className="w-full flex mb-4 ">
            <div className="overflow-hidden relative rounded-full w-10 h-10 bg-gray-50 ">
              <Image layout='fill' objectFit='cover' src={image} alt={`Testimonial | ${name}`} />
            </div>
            <div className=" pl-3">
              {open.name ? (
                <ClickAwayListener
                  onClickAway={() =>
                    setOpen({
                      name: false,
                      image: false,
                      message: false
                    })
                  }
                >
                  <div className="flex flex-row space-x-1">
                    <>
                      <input
                        onChange={(e) =>
                          setEditTestimonial({
                            ...editTestimonial,
                            name: e.target.value
                          })
                        }
                        className="w-32 pl-1"
                        placeholder={name}
                      />
                      <button onClick={() => handleChange("name")}>
                        <Edit className="h-6 w-6" />
                      </button>
                    </>
                  </div>
                </ClickAwayListener>
              ) : (
                <button
                  onClick={() =>
                    setOpen({
                      name: true,
                      image: false,
                      message: false
                    })
                  }
                  className="focus:outline-none p-0  z-20 "
                >
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    {name}
                  </h6>
                </button>
              )}
              {open.image ? <></> : <></>}
            </div>
          </div>
          {/* Message */}
          {open.message ? (
            <ClickAwayListener
              onClickAway={() =>
                setOpen({
                  name: false,
                  image: false,
                  message: false
                })
              }
            >
              <div className="flex flex-row space-x-1 ">
                <>
                  <input
                    onChange={(e) =>
                      setEditTestimonial({
                        ...editTestimonial,
                        message: e.target.value
                      })
                    }
                    className="w-48 pl-1"
                    placeholder={message}
                  />
                  <button onClick={() => handleChange("message")}>
                    <Edit className="h-6 w-6" />
                  </button>
                </>
              </div>
            </ClickAwayListener>
          ) : (
            <div className="w-full flex pb-2 justify-center">
              <button
                onClick={() =>
                  setOpen({
                    name: false,
                    image: false,
                    message: true
                  })
                }
                className="focus:outline-none p-0"
              >
                <p className="text-sm leading-tight">
                  {message}
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </button>
            </div>
          )}
          {open.image ? (
            <ClickAwayListener
              onClickAway={() =>
                setOpen({
                  name: false,
                  image: false,
                  message: false
                })
              }
            >
              <div className="flex flex-row space-x-1 ">
                <>
                  <input
                    onChange={(e) =>
                      setEditTestimonial({
                        ...editTestimonial,
                        image: e.target.value
                      })
                    }
                    className="w-64 pl-1"
                    placeholder={image}
                  />
                  <button onClick={() => handleChange("image")}>
                    <Edit className="h-6 w-6" />
                  </button>
                </>
              </div>
            </ClickAwayListener>
          ) : (
            <div className="w-full">
              <button
                onClick={() =>
                  setOpen({
                    name: false,
                    image: true,
                    message: false
                  })
                }
                className="focus:outline-none p-0"
              >
                <p className="text-xs leading-tight">
                  {image}
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
      {openModal ? (
        <Modal
          setOpen={setOpenModal}
          id={id}
          deleteData={deleteInstagram}
          title="Delete Instagram"
          description=" Are you sure that you want to delete this Testimonial?"
        />
      ) : null}
    </>
  );
}
