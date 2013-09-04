/*jshint multistr: true */

Template.quickTestTemplate =
    '<div id="quick-test" class="display-none">\
        <h1>{name}</h1>\
        <div id="quick-test-introduction">\
            <br/>\
            <p>\
                <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>\
            </p>\
            <br/>\
            {#data.tests}\
            {introduction.content|s}\
            <br/>\
            <button type="button" class="btn btn-lg btn-gwoe js-quick-test-start">Schnelltest starten</button>\
            {/data.tests}\
        </div>\
        {#data.tests}\
        <div id="quick-test-questions">\
            <div id="quick-test-question-profile" class="quick-test-question display-none">\
                <div class="quick-test-questions-text">\
                    <div class="quick-test-profile-form">\
                        <div class="quick-test-profile-form-text">\
                            Bitte geben Sie ein:\
                        </div>\
                        <div class="form-group">\
                            <label for="quick-test-participant-companyName">Unternehmenname:</label>\
                            <input type="text" class="form-control" id="quick-test-participant-companyName" placeholder="Firmenname" autofocus />\
                        </div>\
                        <div class="form-group">\
                            <label for="quick-test-participant-participantType">Unternehmentyp:</label>\
                            <select class="form-control" id="js-quick-test-participant-participantType">\
                                {#structure.testTypes[0].participants}\
                                <option value="{type}">{name}</option>\
                                {/structure.testTypes[0].participants}\
                            </select>\
                        </div>\
                    </div>\
                </div>\
                <div class="quick-test-questions-buttons">\
                    <button type="button" class="btn btn-lg btn-default js-start-test-button">\
                        Weiter\
                    </button>\
                </div>\
            </div>\
            {#questions}\
            <div id="quick-test-question-{$idx}" class="quick-test-question display-none">\
                <div class="quick-test-questions-indicator">\
                    {stakeholders}{gwoeValue}\
                </div>\
                <div class="quick-test-questions-text">\
                    {text}\
                </div>\
                <div class="quick-test-questions-buttons">\
                    {#structure.testTypes[0].individualAnswer.evaluationValues}\
                    <button data-value="{value}" type="button" class="btn btn-lg btn-default btn-gwoe-level-{$idx} js-quick-test-question-button">\
                        {text}\
                    </button>\
                    {/structure.testTypes[0].individualAnswer.evaluationValues}\
                </div>\
            </div>\
            {/questions}\
        </div>\
        {/data.tests}\
        <div id="quick-test-result" class="display-none">\
            <div id="quick-test-result-companyName"></div>\
            <div class="row">\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">\
                    <div class="quick-test-result-progress-bar-container">\
                        <div class="bs-example vertical bottom v-bottom-basic">\
                            <div class="progress vertical bottom wide">\
                                <div id="quick-test-result-progress-bar" class="progress-bar advanced-level-bg-text" aria-valuetransitiongoal="0"></div>\
                            </div>\
                        </div>\
                        <div class="quick-test-result-points-container">\
                            <span id="quick-test-points"></span> von \
                            <span id="quick-test-max-points"></span> Punkte.\
                        </div>\
                    </div>\
                </div>\
                <div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">\
                    <div id="quick-test-result-text"></div>\
                </div>\
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>\
            </div>\
        </div>\
    </div>';
