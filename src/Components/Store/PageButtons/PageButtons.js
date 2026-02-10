import './_page-buttons.scss';

import Button from '../../Button/Button';

function PageButtons({numOfPages, page, onClick}) {
    return (
        <div className='page-buttons'>
            <Button 
                label=" < "
                type="primary"
                size="medium"
                onClick={() => {onClick(page - 1)}}
                isDisabled={(page === 1) ? true:false}
            />
            <ul className='page-buttons__numbers'>
                {Array.from({ length: numOfPages }, (_, i) => i + 1).map((num, i) => 
                    <li key={i}>
                        <Button
                            label={num}
                            type={(num !== page) ? "primary":"secondary"}
                            size="medium"
                            onClick={() => {onClick(num)}}
                        />
                    </li>
                )}
            </ul>
            <Button 
                label=" > "
                type="primary"
                size="medium"
                onClick={() => {onClick(page + 1)}}
                isDisabled={(page === numOfPages) ? true:false}
            />
        </div>
    )
}

export default PageButtons;