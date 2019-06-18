import React from 'react';
import './CustomerCard.css';

const CustomerCard = ({ name, ssn, score, income, id, partnerName, maritalStatus, address, lastUpdated }) => {

  function copyToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(ssn).then(function () {
        /* clipboard successfully set */
      }, function () {
        /* clipboard write failed */
      });
    }
  }

  function get_personal_name_font(name, score) {
    const ascii = /^[ -~\t\n\r]+$/;
    const asciiOnly = ascii.test(name);

    if (asciiOnly) {
      if (score >= 0.8) {
        return 'terrifying';
      } else if (score >= 0.7) {
        return 'childish';
      } else if (score >= 0.6) {
        return 'love';
      } else if (score >= 0.5) {
        return 'poor';
      } else if (score >= 0.4) {
        return 'vampire';
      } else if (score >= 0.3) {
        return 'ancient';
      }
    } else {
      if (score >= 0.9) {
        return 'kid';
      } else if (score >= 0.8) {
        return 'messy';
      } else if (score >= 0.7) {
        return 'fast';
      } else if (score >= 0.6) {
        return 'outlandish';
      } else if (score >= 0.5) {
        return 'graffiti';
      } else if (score >= 0.4) {
        return 'normalish';
      } else if (score >= 0.3) {
        return 'scary';
      } else if (score >= 0.2) {
        return 'royal';
      } else if (score >= 0.1) {
        return 'delightful';
      } else if (score >= 0.05) {
        return 'writer';
      } else if (score >= 0.02) {
        return 'cute';
      }
    }
    return 'beautiful';
  }

  const personal_name_font = get_personal_name_font(name, score);



  return (
    <div className="ma3 dib container_card" onClick={copyToClipboard}>
      <article className="center bg-light-blue br3 pa4 ba b--black-10 ma2 grow shadow-S">
        <div className="customerCard tc">
          <p className="tl f4 fw4 black mt0 fl w-50 digital">{score}</p><p className="tr f5 fw4 gray mt0 fl w-50 computer">{address}</p>
          <img src={`img/${id}.png`} className="br-100 h4 w4 dib ba b--black-05 pa2 tc" alt="person" />
          <h2 className={`mb2 handwrite name_field ${personal_name_font}`}>{name}</h2>
          <h2 className="f3 mb5 stamp">{ssn}</h2>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">Income</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{income.toLocaleString('en')} kr/month</p>
          </div>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">{partnerName && maritalStatus ? `${maritalStatus}` : ''}</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{partnerName && maritalStatus ? `${partnerName}` : ''}</p>
          </div>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">Updated</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{lastUpdated}</p>
          </div>

        </div>
      </article>
    </div>
  );
}

export default CustomerCard;