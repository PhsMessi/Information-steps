import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export default function App() {
  // const [active, setState] = useState(false);
  const [page, updatePage] = useState(1);
  const nextPage = () => {
    if (page >= 1) updatePage(page + 1);
  };

  const prev = () => {
    if (page > 1) updatePage(page - 1);
  };
  // const active = true;
  return (
    <main className="w-4/6 border p-2 mt-14 mx-auto rounded-md flex">
      <Progress page={page} />
      {page === 1 ? <Form nextPage={nextPage} /> : ""}
      {page === 2 ? <Account nextPage={nextPage} prev={prev} /> : ""}
      {page === 3 ? <Tax nextPage={nextPage} prev={prev} /> : ""}
      {page === 4 ? <Summary nextPage={nextPage} prev={prev} /> : ""}
      {page === 5 ? <Receipt nextPage={nextPage} prev={prev} /> : ""}
      {/* <Form /> */}
    </main>
  );
}

function Progress({ page }) {
  return (
    <div className="w-2/6 p-6 border rounded">
      <h2 className="ml-4">STI NOSP Scholarship</h2>
      <h2 className="mt-7 font-semibold ml-4">Create Account</h2>
      <br />
      <ul>
        {/* 1 */}
        {page >= 1 ? (
          <>
            <li className="p-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-6 mr-2 text-green-500"
              />
              <h2>Personal Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        ) : (
          <>
            <li className="p-1 ml-1 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={fa1}
                className=" h-2 w-2 mr-2 p-2 mb-1 bg-gray-100 border rounded-full"
              />
              <h2>Personal Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        )}
        {/* 2 */}
        {page >= 2 ? (
          <>
            <li className="p-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-6 mr-2 text-green-500"
              />
              <h2>Account Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        ) : (
          <>
            <li className="p-1 ml-1 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={fa2}
                className=" h-2 w-2 mr-2 p-2 mb-1 bg-gray-100 border rounded-full"
              />
              <h2>Account Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        )}
        {/* 3 */}
        {page >= 3 ? (
          <>
            <li className="p-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-6 mr-2 text-green-500"
              />
              <h2>Tax Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        ) : (
          <>
            <li className="p-1 ml-1 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={fa3}
                className=" h-2 w-2 mr-2 p-2 mb-1 bg-gray-100 border rounded-full"
              />
              <h2>Tax Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        )}
        {/* 4 */}
        {page >= 4 ? (
          <>
            <li className="p-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-6 mr-2 text-green-500"
              />
              <h2>Tax Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        ) : (
          <>
            <li className="p-1 ml-1 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={fa4}
                className=" h-2 w-2 mr-2 p-2 mb-1 bg-gray-100 border rounded-full"
              />
              <h2>Tax Details</h2>
            </li>
            <li className="h-8 w-0 ml-5  border"></li>
          </>
        )}
        {/* 5 */}

        {page >= 5 ? (
          <>
            <li className="p-2 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="h-6 mr-2 text-green-500"
              />
              <h2>Tax Details</h2>
            </li>
          </>
        ) : (
          <>
            <li className="p-1 ml-1 rounded-md flex items-center">
              <FontAwesomeIcon
                icon={fa5}
                className=" h-2 w-2 mr-2 p-2 mb-1 bg-gray-100 border rounded-full"
              />
              <h2>Tax Details</h2>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

function Form({ nextPage }) {
  return (
    <div className="p-6 px-10 w-4/6">
      <p>YOUR PERSONAL DETAILS</p>
      <p className="mt-5">National ID Number</p>
      <input className="p-2 pl-3 border border-slate-400  w-72 rounded-sm" />

      <div className="mt-4 flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="First Name"
        />
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Last Name"
        />
      </div>

      <p className="mt-5">YOUR RESIDENTIAL ADDRESS</p>
      <div className=" flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Street Address"
        />
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Street Address(optional)"
        />
      </div>

      <div className="mt-4 flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400 w-28"
          placeholder="Post Code"
        />
        <input
          className="p-2 pl-3 border border-slate-400"
          placeholder="City"
        />
        <input
          className="p-2 pl-3 border border-slate-400"
          placeholder="Country"
        />
      </div>

      <p className="mt-4">Contact Details</p>
      <div className="flex">
        <input
          className="p-2 pl-3 border border-slate-400 w-28"
          placeholder="+63"
        />
        <input
          className="p-2 pl-3 border border-slate-400"
          placeholder="Phone Number"
        />
      </div>

      <input
        className=" mt-4 p-2 pl-3 border border-slate-400  w-72 rounded-sm"
        placeholder="Email Address"
      />
      <br />
      <br />
      <hr></hr>
      <br />
      <div className="flex justify-end">
        <button
          onClick={nextPage}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Account({ prev, nextPage }) {
  return (
    <div className="p-6 px-10 w-4/6">
      <h2>ACCOUNT DETAILS</h2>
      <br />
      <div className="flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Account Holder Name"
        />
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Bank name"
        />
      </div>
      <h2 className="mt-5">Number Information</h2>
      <div className="flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Account number"
        />
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Confirm account number"
        />
      </div>

      <h2 className="mt-5">Phone number</h2>
      <div className="flex justify-between">
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Phone number"
        />
        <input
          className="p-2 pl-3 border border-slate-400  w-72 rounded-sm"
          placeholder="Confirm phone number"
        />
      </div>
      <h2 className="mt-5">Security Question 1</h2>
      <input
        className="p-2 pl-3 border border-slate-400  w-full rounded-sm"
        placeholder="Who is your favorite football player?"
      />
      <h2 className="mt-5">Security Question 2</h2>
      <input
        className="p-2 pl-3 border border-slate-400  w-full rounded-sm"
        placeholder="Where did you play regional meet in 2014??"
      />
      <hr className="mt-8" />
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Back
        </button>
        <button
          onClick={nextPage}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Tax({ prev, nextPage }) {
  return (
    <div className="p-6 px-10 w-4/6">
      <h2>TAX DETAILS</h2>
      <br />
      <p>NO DESIGN YETTTTTTT...</p>

      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Back
        </button>
        <button
          onClick={nextPage}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Summary({ prev, nextPage }) {
  return (
    <div className="p-6 px-10 w-4/6">
      <h2>INFORMATION SUMMARY</h2>
      <br />

      <p>NO DESIGN YETTTTTTT...</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Back
        </button>
        <button
          onClick={nextPage}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Receipt({ prev, nextPage }) {
  return (
    <div className="p-6 px-10 w-4/6">
      <h2>RECEIPT</h2>
      <br />

      <p>NO DESIGN YETTTTTTT...</p>
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Back
        </button>
        <button
          onClick={nextPage}
          className="p-1 px-5 bg-green-500 rounded-full text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
