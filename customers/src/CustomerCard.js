import React from 'react';
import './CustomerCard.css';

const CustomerCard = ({ name, ssn, score, income, id, partnerName, maritalStatus, address, lastUpdated, gender, age }) => {

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
      if (score >= 35) { 
        return 'sloppy_bad'; 
      } else if (score >= 1.0) {
        return 'terrifying';
      }else if (score >= 0.8) {
        return 'childish';
      } else if (score >= 0.7) {
        return 'manga';
      } else if (score >= 0.6) {
        return 'love';
      } else if (score >= 0.5) {
        return 'poor';
      } else if (score >= 0.4) {
        return 'vampire';
      } else if (score >= 0.3) {
        return 'ancient';
      } else if (score >= 0.2) {
        return 'cool';
      }
    }

    if (score >= 80.0) {
      return 'rock';
    } else if (score >= 15.0) {
      return 'kid';
    } else if (score >= 10.0) {
      return 'messy_grafitti';
    } else if (score >= 5.0) {
      return 'scary';
    } else if (score >= 0.9) {
      return 'hiphop';
    } else if (score >= 0.8) {
      return 'cute';
    } else if (score >= 0.6) {
      return 'outlandish';
    } else if (score >= 0.5) {
      return 'graffiti';
    } else if (score >= 0.4) {
      return 'messy'; 
    } else if (score >= 0.3) {
      return 'fast';
    } else if (score >= 0.2) {
      return 'royal';
    } else if (score >= 0.1) {
      return 'delightful';
    } else if (score >= 0.08) {
      return 'cultured';
    }else if (score >= 0.06) {
      return 'writer';
    } else if (score >= 0.04) {
      return 'normalish';
    } else if (score >= 0.02) {
      return 'classy';
    }

    return 'beautiful';
  }

  function get_handwrite_rotation(income) {
    if (income > 80000) {
      return 'large_right_rotation';
    } else if (income > 70000) {
      return 'medium_right_rotation';
    } else if (income > 60000) {
      return 'small_right_rotation';
    } else if (income > 50000) {
      return 'tiny_right_rotation';
    } else if (income > 40000) {
      return 'no_stamp_rotation';
    } else if (income > 30000) {
      return 'tiny_leftt_rotation';
    } else if (income > 20000) {
      return 'small_left_rotation';
    } else if (income > 10000) {
      return 'medium_left_rotation';
    } else {
      return 'large_left_rotation';
    }
  }

  function get_stamp_rotation(age) {
    if (age > 90) {
      return 'large_right_rotation';
    } else if (age > 80) {
      return 'medium_right_rotation';
    } else if (age > 70) {
      return 'small_right_rotation';
    } else if (age > 60) {
      return 'tiny_right_rotation';
    } else if (age > 50) {
      return 'no_stamp_rotation';
    } else if (age > 40) {
      return 'tiny_leftt_rotation';
    } else if (age > 30) {
      return 'small_left_rotation';
    } else if (age > 20) {
      return 'medium_left_rotation';
    } else {
      return 'large_left_rotation';
    }
  }

  const personal_name_font = get_personal_name_font(name, score);

  const handwrite_rotation = get_handwrite_rotation(income);

  const stamp_rotation = get_stamp_rotation(age);

  return (
    <div className="ma3 dib container_card" onClick={copyToClipboard}>
      <article className="center br3 pa4 ba b--black-10 ma2 grow shadow-S">
        <div className="customerCard tc">
          <p className="tl f4 fw4 black mt0 fl w-50 digital">{score}%</p><p className="tr f5 fw4 gray mt0 fl w-50 computer">{address}</p>
          <img src={`img/${id}.png`} className="br-100 h4 w4 dib ba b--black-05 pa2 tc" alt="person" />
          <h2 className={`mb2 handwrite name_field ${personal_name_font} ${handwrite_rotation}`}>{name}</h2>
          <h2 className={`f3 mb5 stamp ${stamp_rotation}`}>{ssn}</h2>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">Income</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{income.toLocaleString('en')} kr/month</p>
          </div>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">Gender</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{gender}</p>
          </div>

          <div>
            <p className="tl f6 fw4 black mt0 fl w-40 computer capitalize">Age</p>
            <p className="tr f6 fw4 gray mt0 fl w-60 computer">{age}</p>
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