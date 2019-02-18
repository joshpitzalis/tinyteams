import React from 'react';
import Chat from './Chat';
const Discussions = ({ match }) => {
  return (
    <article>
      <section className="cf ph3 ph5-ns pv5">
        <header className="fn fl-ns w-50-ns pr4-ns">
          <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">Duck Soup</h1>
          <h2 className="f3 mid-gray lh-title">
            A collaborative decision making tool for remote teams.
          </h2>

          <div className="flex">
            {' '}
            <img
              src="http://mrmrs.github.io/photos/p/4.jpg"
              className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
            />
            <img
              src="http://mrmrs.github.io/photos/p/5.jpg"
              className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
            />
            <img
              src="http://mrmrs.github.io/photos/p/6.jpg"
              className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
            />
          </div>
        </header>
        <div className="fn fl-ns w-50-ns">
          <p className="f5 lh-copy measure mt0-ns">
            TYPOGRAPHY, even when poorly executed, can never be taken for
            granted; nor is it ever accidental. Indeed, beauti- fully typeset
            pages are always the result of long experience. Now and then they
            even attain the rank of great artistic achievement. But the art of
            typesetting stands apart from ex- pressive artwork, because the
            appeal is not limited to a small circle. It is open to everyone's
            critical judgment, and nowhere does this judgment carry more weight.
            Typography that can- not be read by everybody is useless. Even for
            someone who constantly ponders matters of readability and
            legibility, it is difficult to determine whether something can be
            read with ease, but the average reader will rebel at once when the
            type is too small or otherwise irritates the eye; both are signs of
            a certain illegibility already.
          </p>
          <p className="f5 lh-copy measure">
            All typography consists of letters. These appear either in the form
            of a smoothly running sentence or as an assembly of lines, which may
            even have contrasting shapes. Good typog- raphy begins, and this is
            no minor matter, with the typeset- ting of a single line of text in
            a book or a newspaper. Using exactly the same typeface, it is
            possible to create either a pleasant line, easily read, or an
            onerous one. Spacing, if it is too wide or too compressed, will
            spoil almost any typeface.
          </p>
          <ul>
            <li>Link to Website</li>
            <li>Google Drive</li>
            <li>Github</li>
          </ul>
        </div>
      </section>

      <Chat />

      <div className="mw9 center ph3 ph5-ns">
        <h2>Current Decisions</h2>

        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <div class="f3 f2-ns b ml0">93</div>{' '}
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">
              Should we something about something?
            </h1>

            <time className="f6 ttu tracked gray">3 days left</time>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button
                class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                type="submit"
              >
                + Upvote
              </button>
            </form>
          </div>
        </article>

        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <div class="f3 f2-ns b ml0">33</div>{' '}
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">
              What about that other thing?
            </h1>
            <time className="f6 ttu tracked gray">13 days left</time>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button
                class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                type="submit"
              >
                + Upvote
              </button>
            </form>
          </div>
        </article>

        <article class="dt w-100 bb b--black-05 pb2 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <div class="f3 f2-ns b ml0">9</div>
          </div>
          <div class="dtc v-mid pl3">
            <h1 class="f6 f5-ns fw6 lh-title black mv0">
              Are we going to do a or not?
            </h1>
            <time className="f6 ttu tracked gray">6 days left</time>
          </div>
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button
                class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                type="submit"
              >
                + Upvote
              </button>
            </form>
          </div>
        </article>

        <article class="dt w-100  b--black-05 pb2 mt2" href="#0">
          <div class="dtc v-mid">
            <form class="w-100 tr">
              <button
                class="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"
                type="submit"
              >
                + Create New Vote
              </button>
            </form>
          </div>
        </article>
      </div>
      <section className="flex items-center mw9 center pa3 pa5-ns ">
        <div className="dib">
          <h1 className="f4 bold center w5">Thing List</h1>
          <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" /> Thing
            </li>
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" />
              {` `}Other Thing
            </li>
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" />
              {` `}Something else{' '}
              <img
                src="http://mrmrs.github.io/photos/p/5.jpg"
                className="ba b--black-10 br-100 w1  h1 dib"
              />
            </li>
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" />
              {` `} Important thing
            </li>
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" />
              {` `}Other important thing
            </li>
            <li className="ph3 pv2 bb b--light-silver">
              <input type="checkbox" />
              {` `}second last thing{' '}
              <img
                src="http://mrmrs.github.io/photos/p/3.jpg"
                className="ba b--black-10 br-100 w1  h1 dib"
              />
            </li>
            <li className="ph3 pv2">
              <input type="checkbox" />
              {` `} Last thing
            </li>
          </ul>
        </div>

        <h2 className="dib ml5">+ Create New List</h2>
      </section>

      <section class="pa3 pa5-ns" data-name="slab-stat-small">
        <h3 class="f6 ttu tracked">Today</h3>
        <div class="cf">
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Votes cast</dd>
            <dd class="f3 fw6 ml0">24</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Todos created</dd>
            <dd class="f3 fw6 ml0">3</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Hour Worked</dd>
            <dd class="f3 fw6 ml0">44</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">Chat Comments</dd>
            <dd class="f3 fw6 ml0">102</dd>
          </dl>

          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title mr5-l">
            <dd class="f6 fw4 ml0">People</dd>
            <dd class="f3 fw6 ml0">3</dd>
          </dl>
          <dl class="fl fn-l w-50 dib-l w-auto-l lh-title">
            <dd class="f6 fw4 ml0">Days left</dd>
            <dd class="f3 fw6 ml0">126</dd>
          </dl>
        </div>
      </section>
      <div className="mw9 center ph3 ph5-ns">
        <progress value="22" max="100" className=" w-100 " />
      </div>
    </article>
  );
};

export default Discussions;