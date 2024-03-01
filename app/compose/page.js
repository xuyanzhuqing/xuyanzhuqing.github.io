'use client'
import Script from 'next/script'
import { Fragment, useState, useRef } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { articles } from '/config'
import { useAddArticle } from '/api/article'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['link', 'image'],
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

function ComposePage() {
  let editor = useRef(null)
  let fileRef = useRef(null)
  let titleRef = useRef(null)
  const [selected, setSelected] = useState(articles[0])
  return (
    <>
      <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
      <div className="flex w-full gap-6 justify-between items-center mb-6">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <div className="relative">
                <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    <span className="ml-3 block truncate">{selected.label}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {articles.map((person) => (
                      <Listbox.Option
                        key={person.value}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {person.label}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            ref={titleRef}
            type="text"
            name="title"
            id="title"
            autoComplete="标题"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="请输入标题"
          />
        </div>
        <button
          type="submit"
          className="flex w-64 justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            useAddArticle({
              "title": titleRef.current.value,
              "content": editor.current.getContents(),
              "description": editor.current.getText().slice(0, 100),
              "category_id": selected.id,
              user_id: 1,
              "tags": "古典诗"
            })
          }}
        >
          保存
        </button>
      </div>
      <div id="toolbar"></div>
      <div id="editor" style={{ 'min-height': '18rem' }}>
        <p>Hello World!</p>
      </div>
      <input ref={fileRef} type="file" style={{ display: 'none' }} />
      <Script src="https://cdn.quilljs.com/1.3.6/quill.js" onReady={() => {
        const quill = new Quill('#editor', {
          modules: {
            toolbar: toolbarOptions
          },
          theme: 'snow',
        });

        var toolbar = quill.getModule('toolbar')
        toolbar.addHandler('link', function (value) {
          if (value) {
            var href = prompt('Enter the URL');
            this.quill.format('link', href);
          } else {
            this.quill.format('link', false);
          }
        })

        fileRef.current.addEventListener('change', (e) => {
          const formData = new FormData()
          formData.append("file", e.target.files[0]);
          formData.append('name', 'xxxx')
          // axios
          // quill.format('image', 'https://img.zcool.cn/community/01836955435fde0000019ae9ee9b86.jpg@1280w_1l_2o_100sh.jpg')
        })

        toolbar.addHandler('image', function (value) {
          if (value) {
            fileRef.current.click()
          } else {
            this.quill.format('image', false);
          }
        })

        editor.current = quill
      }}></Script >
    </>
  )
}

export default ComposePage