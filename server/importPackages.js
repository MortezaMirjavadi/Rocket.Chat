import '../app/assets/server';
import '../app/authorization';
import '../app/channel-settings';
import '../app/emoji';
import '../app/emoji-emojione/server';
import '../app/error-handler';
import '../app/file';
import '../app/file-upload';
import '../app/lib';
import '../app/livestream/server';
import '../app/token-login/server';
import '../app/mailer';
import '../app/markdown/server';
import '../app/ui-master/server';
import '../app/videobridge/server';
import '../app/meteor-accounts-saml/server';
import '../app/discussion/server';
import '../app/mail-messages/server';
import '../app/utils';
import '../app/models';
import '../app/ui-utils';
import '../app/livechat/server';
import '../app/authentication/server';

// this file contains the settings for the registered services
import './settings/settingfiles';
import './api/methods';
import './services/2fa';
import './api/v1';
import './services/messages/slashcommands';
import './services/messages/mentions';
import './services/messages/threads';
import './services/messages/retention-policy';
import './services/messages/reactions';
import './services/importer';
import './services/importer/strategies';
import './services/apps';
import './services/autotranslate';
import './services/cloud';
import './services/user/data-download';
import './services/search';
import './services/notifications';
import './services/e2e';
import './services/federation';

import './overrides/google-oauth';
import './utils';

import './integrations';
import './integrations/oauth';

import './startup/migrations';
