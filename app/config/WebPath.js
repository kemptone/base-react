export default {                                                        //     any     usr     eus     ema     ead     tsu     tad
    INDEX:                       '/',                                   //      x       x       x       x       x       x       x
    ACTIVE_ORGS:                 '/admin/enterprise-orgs',              //                                              x       x
    L10N_DATA:                   '/admin/l10n',                         //                                              x       x
    ORG_LICENSE_SEARCH:          '/admin/org-search',                   //                                              x       x
    MAINTENANCE_WINDOWS:         '/admin/maintenance-windows',          //                                              x       x
    RECENT_ORGS:                 '/admin/recent-orgs',                  //                                              x       x
    SKILL_CURATION:              '/admin/skills',                       //                                              x       x
    SKILL_CURATION_ITEM:         '/admin/skills/:tab',                  //                                              x       x
    SKILL_CURATION_REDIRECT:     '/admin/skills-lib/skills/:id',        //                                              x       x
    SUSPENDED_USERS_VIEW:        '/admin/users/suspended',              //                                              x       x
    SUSPENDED_USER_PROFILE:      '/admin/users/suspended/:permalink',   //                                              x       x
    ORG_PROFILE_ROOT:            '/explore',                            //      x       x       x       x       x       x       x
    BRAND_MALL:                  '/explore/companies',                  //      x       x       x       x       x       x       x
    ORG_PROFILE:                 '/explore/:permalink',                 //      x       x       x       x       x       x       x
    ORG_PROFILE_TAB:             '/explore/:permalink/:tab',            //      x       x       x       x       x       x       x
    EXPORT_PDF:                  '/export/pdf',                         //              x       x       x       x       x       x
    ACCEPT_ENTERPRISE_INVITE:    '/invitation/:token',                  //      x       x       x       x       x       x       x
    LOGIN:                       '/login',                              //      x       x       x       x       x       x       x
    LOGOUT:                      '/logout',                             //      x       x       x       x       x       x       x
    MESSAGES:                    '/messages',                           //              x       x       x       x       x       x
    MESSAGE:                     '/messages/:threadId',                 //              x       x       x       x       x       x
    MOBILE_SPLASH:               '/mobile-splash',                      //      x       x       x       x       x       x       x
    ORG_LICENSE_DETAIL:          '/org',                                //                                      x       x       x
    ORG_LICENSE_DETAIL_TSKY:     '/org/:id',                            //                                              x       x
    PENDING_VERIFICATION:        '/pending',                            //      x       x       x       x       x       x       x
    USER_PROFILE:                '/:permalink',                         //      x       x       x       x       x       x       x
    LEAVE_MOMENT_FEEDBACK:       '/:permalink/feedback/:id',            //              x       x       x       x       x       x
    ACCEPT_USER_INVITE:          '/:permalink/invitation/:token',       //      x       x       x       x       x       x       x
    MOMENT_DETAIL:               '/:permalink/moments/:id',             //      x       x       x       x       x       x       x
    MOMENT_EDIT:                 '/:permalink/moments/:id/edit',        //              x       x       x       x       x       x
    MOMENT_EDIT_TAB:             '/:permalink/moments/:id/edit/:tab',   //              x       x       x       x       x       x
    MOMENTS_TAGGED:              '/:permalink/moments/tagged',          //              x       x       x       x       x       x
    POSITION_DRILL_DOWN:         '/:permalink/position/:moment',        //      x       x       x       x       x       x       x
    USER_PROFILE_TAB:            '/:permalink/:tab',                    //      x       x       x       x       x       x       x
    ORG_POSITIONS:               '/positions',                          //                                      x       x       x
    PRIVACY_POLICY:              '/privacy',                            //      x       x       x       x       x       x       x
    ROLE_DETAIL:                 '/explore/:permalink/roles/:role_id',  //      x       x       x       x       x       x       x
    REGISTER:                    '/register',                           //      x       x       x       x       x       x       x
    COLLEAGUE_WASNT_ME:          '/reject/moments/:token',              //      x       x       x       x       x       x       x
    ACTIVE_SEARCH_LIST:          '/search',                             //                              x       x       x       x
    ACTIVE_SEARCH_RESULTS:       '/search/:id',                         //                              x       x       x       x
    ACTIVE_SEARCH_COMPARE_USERS: '/search/:id/compare/:u1/:u2/:u3/:u4', //                              x       x               x
    ACTIVE_SEARCH_EDIT:          '/search/:id/edit',                    //                              x       x       x       x
    SETTINGS_MAIN_PAGE:          '/settings',                           //              x       x       x       x       x       x
    SETTINGS_ITEM:               '/settings/:tab',                      //              x       x       x       x       x       x
    REACTIVATE_ACCOUNT:          '/settings/account',                   //              x       x       x       x       x       x
    START_HERE:                  '/start-here',                         //              x       x       x       x       x       x
    SUPPORT:                     '/support',                            //              x       x       x       x       x       x
    SUPPORT_TICKET:              '/support/ticket',                     //              x       x       x       x       x       x
    SUPPORT_TICKET_WITH_SUBJECT: '/support/ticket/:subject',            //              x       x       x       x       x       x
    FAQ_ITEM:                    '/support/:faqId',                     //              x       x       x       x       x       x
    TERMS_OF_SERVICE:            '/tos',                                //      x       x       x       x       x       x       x
    VERIFY_EMAIL:                '/verify/email/:token',                //      x       x       x       x       x       x       x
    VERIFY_PASSWORD_RESET:       '/verify/password/:token'              //      x       x       x       x       x       x       x
}
